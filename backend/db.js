const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    crossOriginIsolated.log(error);
    process.exit(1);
  }
};

// Export the Transaction model and the connectToDatabase function
module.exports = connectDB;
