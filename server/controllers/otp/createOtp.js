const OTP = require("../../models/otp");
const nodemailer = require("nodemailer");
const emailjs = require("@emailjs/browser");

const createOtp = async (req, res) => {
   const { name, email } = req.body;
   const createdOTP = Math.floor(((Math.random() * 1000000) % 900000) + 99999);
   OTP.updateOne(
      { email: email },
      {
         email: email,
         otp: createdOTP,
         time: new Date(),
      },
      { upsert: true },
      async () => {
         const templateParams = {
            name: name,
            OTP: createdOTP,
            to: email,
         };

         emailjs
            .send(
               process.env.EMAIL_JS_SERVICE_ID,
               process.env.EMAIL_JS_TEMPLATE_ID,
               templateParams,
               process.env.EMAIL_JS_PUBLIC_KEY
            )
            .then(
               (response) => {
                  res.status(201).json({
                     message: "Otp sent to " + email,
                     status: res.statusCode,
                  });
               },
               (error) => {
                  res.status(480).json({
                     message:
                        "Couldn't send otp, check your email or try again.",
                     status: res.statusCode,
                  });
               }
            )
            .catch((err) => {
               console.log(err);
               res.status(400).json({
                  message: "Couldn't send otp, check your email or try again.",
                  status: res.statusCode,
               });
            });
      }
   );
};

module.exports = createOtp;
