import express from "express"
import { createEnquiry} from "../controllers/enquiry.controller.js"

const enquiryRouter = express.Router()
enquiryRouter.post('/',createEnquiry)

export default enquiryRouter