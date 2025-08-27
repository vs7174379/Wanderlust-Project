const Listing = require("../models/Listing");
const { cloudinary } = require("../cloudConfig.js");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Booking = require("../models/booking.js"); // create a booking model
const BookedDate = require("../models/bookedDate.js");

module.exports.index = async (req, res) => {
    allListings = await Listing.find({});
    res.render("index.ejs", { allListings })

};

module.exports.renderNewForm = (req, res) => {

    res.render("new.ejs")
};
module.exports.renderHostpage = (req, res) => {

    res.render("overview.ejs")
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const bookedDates = await BookedDate.find({ listing: id });
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "listing you requsted for does not exist")
        res.redirect("/listings")
    }
    res.render("show.ejs", { listing, bookedDates })

};



module.exports.createListings = async (req, res, next) => {
    const newlisting = new Listing(req.body.listing);

    // Set the listing owner
    newlisting.owner = req.user.id;

    // Map multiple uploaded files into an array of { url, filename }
    newlisting.image = req.files.map(file => ({
        url: file.path,
        filename: file.filename
    }));

    // Enforce at least 5 images
    if (newlisting.image.length < 5) {
        req.flash("error", "Please upload at least 5 images.");
        return res.redirect("/listings/hosting/form");
    }

    await newlisting.save();
    req.flash("success", "New listing created!");
    res.redirect(`/listings`);
};


module.exports.editListings = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested does not exist");
        return res.redirect("/listings");
    }

    // Create transformed thumbnails for existing images

    const originalImages = listing.image.map(img => {
        if (img.url) {
            return {
                url: img.url.replace("/upload", "/upload/h_200,w_150"), // transformed thumbnail
                filename: img.filename
            };
        }
        return null;
    }).filter(url => url); // filter out nulls

    res.render("edit.ejs", { listing, originalImages, });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }

    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Handle new uploaded images
    if (req.files && req.files.length > 0) {
        const newImages = req.files.map(f => ({ url: f.path, filename: f.filename }));
        listing.image.push(...newImages); // append new images
        await listing.save();
    }

    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletelisting = await Listing.findByIdAndDelete(id);
    console.log(deletelisting)
    req.flash("success", "listing deleted")
    res.redirect("/listings")

}


// DELETE a single image
module.exports.deleteImage = async (req, res) => {
    const {id, i } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) return res.status(404).send("Listing not found");

    // Filter out the image
    const imgToDelete = listing.image.id(i);
    if (!imgToDelete) {
        req.flash("error", "Image not found");
        return res.redirect(`/listings/${id}`);
    }

    // ✅ Delete from Cloudinary
    await cloudinary.uploader.destroy(imgToDelete.filename);
    

     listing.image.pull({ _id: i });
    await listing.save();
    res.redirect(`/listings/${id}`);
}

module.exports.renderSearchResults = async (req, res) => {
  const location = req.query.location || ""; 
  const guests = parseInt(req.query.guests) || 1;
  const max= parseInt(req.query.maxPrice) || 10000;
  const type=req.query.property_type || "";
  console.log("Searching for location:", location);

  
  let searchResults = [];
  if (location) {
    searchResults = await Listing.find({
      location: { $regex: location, $options: "i" }
    });
  } else {
    searchResults = await Listing.find({});
  }
  searchResults = searchResults.filter(listing => listing.guests >= guests);
  searchResults = searchResults.filter(listing => listing.price <= max);
  if(type){
    searchResults = searchResults.filter(listing => listing.property_type === type);
  }

  res.render("searchResults.ejs", { location, searchResults });
};






const razorpay = new Razorpay({
  key_id: "rzp_test_CY6Vuttr0BdTnS",
  key_secret: 'tLMzot2l96TYBE9cMkPullIx',
});

// 1️⃣ Create Razorpay order
module.exports.createOrder= async (req, res) => {
  
  const { amount } = req.body; // amount in paise


  const options = {
    amount: amount, // amount in paise
    currency: "INR",
    receipt: `receipt_order_${Math.random() * 1000}`,
  };
  try {
    const order = await razorpay.orders.create(options);
    console.log("Razorpay Order:", order);
    res.json(order);
  } catch (error) {

    console.error("Error creating Razorpay order:", error);
    res.status(500).send("Error creating order");
  }
}



// 2️⃣ Verify payment & update DB
module.exports.verifyPayment=async (req, res) => {
  
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, listingId, userId,checkIn,checkOut } = req.body;
console.log("razorpay_signature",razorpay_order_id);
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("body",body);
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");
    console.log("expectedSignature",expectedSignature);
    

  if (expectedSignature === razorpay_signature) {
    // ✅ Payment is verified → Save booking in DB
    const booking = new Booking({
      listing: listingId,
      user: userId,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      amount: req.body.amount,
      status: "paid"
    });
    await booking.save();
    const bookedDate=new BookedDate({
      listing:listingId,
      user:userId,
      start:new Date(checkIn),
      end:new Date(checkOut)
    })
    await bookedDate.save();

    return res.json({ success: true, message: "Payment verified and booking saved." });
  } else {
    return res.status(400).json({ success: false, message: "Payment verification failed" });
  }
}


module.exports.getBookings = async (req, res) => {
  const userId = req.user._id;

  // Fetch bookings of current user
  const bookings = await Booking.find({ user: userId })
    .populate("listing") // get listing details (title, price, etc.)
    .sort({ createdAt: -1 });

  res.render("booking.ejs", { bookings });
};
