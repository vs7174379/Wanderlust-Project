const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderId: String,
  paymentId: String,
  amount: Number,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
