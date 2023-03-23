const OTP = require("../../models/otp");
const nodemailer = require("nodemailer");
const emailjs = require("@emailjs/nodejs");

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
      (err, data) => {
         if (!err) {
            console.log(data);
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
                  {
                     publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
                     privateKey: process.env.EMAIL_JS_PRIVATE_KEY,
                  }
               )
               .then((response) => {
                  console.log(response)
                  res.status(201).json({
                     message: "Otp sent to " + email,
                     status: res.statusCode,
                  });
               })
               .catch((err) => {
                  console.log(err);
                  res.status(480).json({
                     message:
                        "Couldn't send otp, check your email or try again.",
                     status: res.statusCode,
                  });
               });
         } else {
            console.log(err);
            res.status(480).json({
               message: "Couldn't send otp, check your email or try again.",
               status: res.statusCode,
            });
         }
      }
   );
};

module.exports = createOtp;
