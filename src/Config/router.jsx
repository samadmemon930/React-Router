
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Components/home";
import About from "../Components/About";
import NotFound from "../Components/NotFound";

const userType = "user";


const Dashboard = () => <h2>Dashboard Page(User)</h2>
const AdminPanel = () => <h2>Admin Panel (Protected)</h2>

const ProtectedRoute = ({ children, userType }) => {
    let nav = useNavigate()

    if (userType == "user") {
        nav("/User")
    }
    else if(userType == "Admin"){
        nav("/Admin")
    }
}




const AppRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/User" element={
                    <ProtectedRoute userType={userType}>
                        <Dashboard Page />
                    </ProtectedRoute>
                }></Route>
                <Route path="/Admin" element={
                    <ProtectedRoute userType={userType}>
                        <AdminPanel/>
                    </ProtectedRoute>
                }></Route>


                <Route path="/loginNot" element={(<h1>login</h1>)}></Route>

                <Route path="*" element={<NotFound />}></Route>


            </Routes>
        </>
    )
}






export default AppRouting;