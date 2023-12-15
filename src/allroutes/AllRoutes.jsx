import { Routes,Route } from "react-router-dom"
import Dashboard from "../pages/dashboard/Dashboard"
import Login from "../pages/login/Login"

 const AllRoutes =()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    )
 }
 export default AllRoutes;