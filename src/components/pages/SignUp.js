import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const SignUp = () =>{
  
  return (
   <div>
   <h1>SignUp Form</h1>  
  
    <Link to="/">
    <HomeIcon  sx={{ ml: 50, }}/> 
    </Link>
          
   </div>
    
  );
}

export default SignUp;