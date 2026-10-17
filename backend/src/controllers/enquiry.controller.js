
import Enquiry from "../models/enquiry.model.js";
import { sendEnquiryNotification } from "../config/mailer.js";

const createEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      packageId,
      packageName,
      travelDate,
      travellers,
      message,
    } = req.body;

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Validate travel date
    let parsedTravelDate = null;

    if (travelDate) {
      parsedTravelDate = new Date(travelDate);

      if (Number.isNaN(parsedTravelDate.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid travel date",
        });
      }
    }

    // Validate number of travellers
    const parsedTravellers =
      travellers === undefined ? 1 : Number(travellers);

    if (
      !Number.isInteger(parsedTravellers) ||
      parsedTravellers < 1 ||
      parsedTravellers > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid number of travellers (1-100)",
      });
    }

    // Create enquiry
    const enquiry = new Enquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      packageId,
      packageName,
      travelDate: parsedTravelDate,
      travellers: parsedTravellers,
      message,
    });

    // Save enquiry to MongoDB first
    await enquiry.save();

    // Send email notification to the business owner
    try {
      await sendEnquiryNotification(enquiry);

      console.log("Enquiry notification email sent successfully");
    } catch (emailError) {
      console.error(
        "Enquiry saved, but email notification failed:",
        emailError.message
      );
    }

    // Return success even if the email notification fails
    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      data: {
        id: enquiry._id,
        status: enquiry.status,
        createdAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    console.error("Create enquiry error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your enquiry right now",
    });
  }
};

export  {createEnquiry};
