const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");


const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// Multer & Cloudinary config
const multer = require("multer");
const { cloudinary, storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// ✅ ROUTES

// All listings (index) & Create new listing
router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.array("listing[image]", 10), // Allow multiple image uploads
    validateListing,
    wrapAsync(listingController.createListings)
  );

// Hosting form routes
router.get("/hosting/form", isLoggedIn, listingController.renderNewForm);
router.get("/hosting", isLoggedIn, listingController.renderHostpage);

// Show, Update, Delete specific listing
router.route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(
    isLoggedIn,
    isOwner,
    upload.array("listing[image]", 10),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

// Edit form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListings));
router.delete("/:id/image/:i", isLoggedIn, isOwner, wrapAsync(listingController.deleteImage));
router.get("/find/search", wrapAsync(listingController.renderSearchResults));
router.post("/:id/payment/order", wrapAsync(listingController.createOrder));
router.post("/:id/payment/verify", wrapAsync(listingController.verifyPayment));
router.get("/:id/payment/order/bookings",isLoggedIn ,wrapAsync(listingController.getBookings));


module.exports = router;
