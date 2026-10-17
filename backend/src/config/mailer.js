
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendEnquiryNotification = async (enquiry) => {
  return transporter.sendMail({
    from: `"ZAAD-E-RAZA Website" <${process.env.GMAIL_USER}>`,
    to: process.env.ENQUIRY_RECEIVER_EMAIL,
    replyTo: enquiry.email,
    subject: `New Website Enquiry - ${enquiry.name}`,
    text: `
A new enquiry has been submitted on the ZAAD-E-RAZA website.

Customer Details
----------------
Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}

Package Details
---------------
Package: ${enquiry.packageName || "Not specified"}
Package ID: ${enquiry.packageId || "Not specified"}
Travel Date: ${
      enquiry.travelDate
        ? new Date(enquiry.travelDate).toLocaleDateString("en-IN")
        : "Not specified"
    }
Travellers: ${enquiry.travellers}

Message
-------
${enquiry.message || "No message provided"}

Enquiry ID: ${enquiry._id}
Submitted At: ${new Date(enquiry.createdAt).toLocaleString("en-IN")}
    `,
  });
};

export default transporter;
