const mongoose = require("mongoose");

// Define the schema for the transactions
const transactionSchema = new mongoose.Schema({
  itemId: String, // You can modify the schema as needed to match your transaction data
  date: Date,
  description: String,
  amount: Number,
});

// Create a model for transactions
const Transaction = mongoose.model("Transaction", transactionSchema);

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost/your-database-name", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Export the Transaction model and the connectToDatabase function
module.exports = { Transaction, connectToDatabase };
