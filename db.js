const mongoose=require("mongoose");
const dotenv=require("dotenv")

dotenv.config();



const Connection = () => {

  const MONGO_URI = process.env.MONGO_URI;

  mongoose.connect(MONGO_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("Disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting database");
  });
};


module.exports = Connection;
