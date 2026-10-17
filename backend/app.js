import express from 'express'
import cors from "cors"
import enquiryRouter from './src/routes/enquiry.routes.js'

const app = express()

app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/health',(req,res)=>{
    res.status(200).json({message:"Health check successfully"})
})
app.use('/api/enquiries',enquiryRouter)

export default app