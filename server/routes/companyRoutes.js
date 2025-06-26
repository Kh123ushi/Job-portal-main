import express from 'express'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import { protectCompany } from '../middlewares/authMiddleware.js'
import upload from '../config/multer.js'
const router = express.Router()


//Register a company
router.post('/register',upload.single('image'),registerCompany)

//Company Login
router.post('/login',loginCompany)

//Get company data
router.get('/company',protectCompany,getCompanyData)

//Post a job
router.post('/post-job', protectCompany,postJob)

//Get Applicants Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

//Get Company Job List
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//Change Application Status
router.post('/change-status', protectCompany,ChangeJobApplicationStatus)

//Change Application Visibility
router.post('/change-visibility',protectCompany,changeVisibility)

export default router