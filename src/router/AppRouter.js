import {BrowserRouter  ,Routes, Route} from "react-router-dom";
import Home from "../components/pages/Home";
import Language from "../components/pages/Language";
import SignIn from "../components/pages/SignIn";



const AppRouter = () =>{
    return(
     
        <BrowserRouter>
          
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signIn" element={<SignIn />}/>
                {/* <Route path="/language" element={<Language />} /> */}
            </Routes>
           
        </BrowserRouter>
     
       
    )
}

export default AppRouter;
