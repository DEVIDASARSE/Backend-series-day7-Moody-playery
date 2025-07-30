const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL) // ya process.env.MONGODB_URI
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
}

module.exports = connectDB;