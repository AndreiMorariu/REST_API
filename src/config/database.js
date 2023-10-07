import "dotenv/config.js";
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDatabase;
