import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function MainLayout(){
    return (
        <>
     
        <div className="">
        <Navbar/>
        </div>
        <div className="">
        <Outlet/>
        </div>
        <div className="">
        <Footer /> 
        </div>
        
       
      
        
        </>
    )
}
export default MainLayout;