import {BrowserRouter  ,Routes, Route} from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../components/pages/Home";
//import Language from "../components/pages/Language";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";

const AppRouter = () =>{
    return(
     
        <BrowserRouter>
          {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
           
        </BrowserRouter>
     
       
    )
}

export default AppRouter;
