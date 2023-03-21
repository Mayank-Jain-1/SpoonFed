const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: true,
         unique: true,
      },

      otp: {
         type: Number,
         required: true,
      },
      time: { type: Date, default: Date.now },
      history: [Date]
   },
);

module.exports = mongoose.model("OTP", otpSchema);
