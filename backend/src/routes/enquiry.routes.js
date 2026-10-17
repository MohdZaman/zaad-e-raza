
import express from "express";
import connectDB from "../config/db.js";
import { createEnquiry } from "../controllers/enquiry.controller.js";

const enquiryRouter = express.Router();

const ensureDBConnection = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);

    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again.",
    });
  }
};

enquiryRouter.post("/", ensureDBConnection, createEnquiry);

export default enquiryRouter;
