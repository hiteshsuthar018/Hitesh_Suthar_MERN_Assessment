import mongoose from "mongoose";
import "dotenv/config"

/*
  Handles MongoDB connection.

  The idea here is to keep database related logic
  separate from the rest of the application so that
  server startup stays clean and readable.
*/

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/PulseHR";

    await mongoose.connect(mongoURI);

    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed");

    // If database fails, it's safer to stop the server
    process.exit(1);
  }
};

export default connectDB;