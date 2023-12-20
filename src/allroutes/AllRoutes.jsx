import { Routes,Route } from "react-router-dom"
import Dashboard from "../pages/dashboard/Dashboard"
import Login from "../pages/login/Login"
import Candidates from "../pages/jobBoard/candidate/Candidates"
import Employers from "../pages/jobBoard/employers/Employers"
import JobPosting from "../pages/jobPartner/jobPosting/JobPosting"
import Payments from "../pages/jobPartner/payments/Payments"
import ContactQueries from "../pages/jobPartner/contactQueries/ContactQueries"
import Education from "../pages/jobAttributes/education/Education"
import EmploymentType from "../pages/jobAttributes/employmentType/EmploymentType"
import JobType from "../pages/jobAttributes/jobType/JobType"
import PackageList from "../pages/userpackage/PackageList"
import Category from "../pages/setting/category/Category"
import Industry from "../pages/setting/industry/Industry"
import Coupons from "../pages/setting/coupons/Coupons"
import GeneralSetting from "../pages/setting/generalSetting/GeneralSetting"
import EmailTemplates from "../pages/setting/emailTemplates/EmailTemplates"
import Language from "../pages/setting/language/Language"
import AddCandidate from "../pages/addCandiate/AddCandidate"
import AddEmployer from "../pages/addEmployer/AddEmployer"
import UpdateCandidate from "../pages/updateCandidate/UpdateCandidiate"
import AddPackage from "../pages/addPackage/AddPackage"
import EditPackage from "../component/updateForm/EditPackage"
import UpdatePackage from "../pages/updatePackage/UpdatePackage"

 const AllRoutes =()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/employers' element={<Employers />} />
                <Route path='/employer/add' element={<AddEmployer/>} />

                <Route path='/users' element={<Candidates/>} />
               
                <Route path='/users/add' element={<AddCandidate/>} />
                <Route path='/users/edit/:id' element={<UpdateCandidate/>} />
                <Route path='/job-posting' element={<JobPosting/>} />
                <Route path='/payments' element={<Payments/>} />
                <Route path='/contact-queries' element={<ContactQueries/>} />

                {/* Job Attributes */}
                <Route path='/job-type' element={<JobType/>} />
                <Route path='/education' element={<Education/>} />
                <Route path='/employement-type' element={<EmploymentType/>} />

                {/* user package */}
                <Route path='/package-list' element={<PackageList/>} />
                <Route path='/package/add' element={<AddPackage/>} />
                <Route path='/package/edit/:id' element={<UpdatePackage/>} />
                {/* setting */}
                <Route path='/category' element={<Category/>} />
                <Route path='/industry' element={<Industry/>} />
                <Route path='/coupons' element={<Coupons/>} />
                {/* <Route path='/location' element={<Location/>} /> */}

                <Route path='/general-setting' element={<GeneralSetting/>} />
                
                <Route path='/email-templates' element={<EmailTemplates/>} />
                <Route path='/language' element={<Language/>} />


                <Route path='/login' element={<Login/>} />
            </Routes>
               
           
        </>
    )
 }
 export default AllRoutes;