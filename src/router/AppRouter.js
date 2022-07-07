import {BrowserRouter  ,Routes, Route} from "react-router-dom";
import English from "../components/pages/English";
import French from "../components/pages/French";
import Home from "../components/pages/Home";
import Language from "../components/pages/Language";



const AppRouter = () =>{
    return(
     
        <BrowserRouter>
          
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/english" element={<English />} />
                <Route path="/french" element={<French />} />
                <Route path="/language" element={<Language />} />
            </Routes>
           
        </BrowserRouter>
     
       
    )
}

export default AppRouter;
