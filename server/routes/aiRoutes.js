import express from "express"
import protect from "../middlewares/authMiddleware.js";
import {uploadResume,enhanceJobDescription, enhanceProfessionalSummary } from "../controllers/aiController.js";

const aiRouter=express.Router();

aiRouter.post('/enhanced-pro-sum',protect,enhanceProfessionalSummary)
aiRouter.post('/enhanced-job-desc',protect,enhanceJobDescription)
aiRouter.post('/upload-resume',protect,uploadResume)

export default aiRouter