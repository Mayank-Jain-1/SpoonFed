const OTP = require("../../models/otp");

const verifyOtp = async (req, res) => {
   const { email, otp } = req.body;
   const resTime = new Date();
   const result = await OTP.findOne({ email: email });
   if(!result){
      return res.status(400).json({
         message: "Couldnt Verify Otp",
         status: res.statusCode
      })
   }
   const realOtp = result["otp"];
   const createdTime = result["time"];
   const resDelay = (resTime.getTime() - createdTime.getTime()) / 1000; 
   console.log('resDelay: ', resDelay);
   if(resDelay > 180){
      return res.status(408).json({
         message: "Otp verification timed out",
         status: res.statusCode
      })
   }
   if(otp !== realOtp){
      return res.status(420).json({
         message: "Verification failed, try again",
         status: res.statusCode
      })
   }else{
      return res.status(200).json({
         message: "Otp matched Successfully",
         status: res.statusCode
      });
   }
};

module.exports = verifyOtp;
