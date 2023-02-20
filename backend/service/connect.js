const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Mayank-Jain:aTppWPRq4ryMgQFy@spoon-fed.uoe2ztt.mongodb.net/spoon-fed?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

const connectDB = async () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
