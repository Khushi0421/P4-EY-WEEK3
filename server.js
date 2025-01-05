import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Include file extension (.js)
import userRoutes from "./routes/userRoutes.js"; // Include file extension (.js)
import cors from "cors";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
