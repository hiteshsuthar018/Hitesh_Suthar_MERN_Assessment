import app from "./app.js";
import connectDB from "./config/db.js";
import "dotenv/config"

// Port can come from environment variables or fallback to 5000
const PORT: number = Number(process.env.PORT) || 3000;
console.log(process.env.PORT, "PORT");
const startServer = async (): Promise<void> => {
  try {
    // establish database connection before accepting requests
    await connectDB();

    app.listen(PORT, () => {
      console.log(` Backend server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // stop the process if server can't start
  }
};

// start the application
startServer();