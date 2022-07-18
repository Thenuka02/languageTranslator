import React from "react";
import Header from "../layout/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core";
import Navbar from "../layout/Navbar";

const backgroundImage = require('../../assets/image_Bg.jpg');


// const styles = {
//   paperContainer: {
//       position: 'fixed',
//       fontSize: "32px",
//       color: '#FFFFFF', 
//       top: "200px",
//       left: "300px",
//   }
// };
const useStyles = makeStyles((theme) => ({
  
  imageBackground: {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh' ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '100%',
    minHeight: "100%",
    //overflow: 'hidden',
    position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.up('sm')]: {
            // height: '80vh',
            // minHeight: 500,
            // maxHeight: 1300,
            height: '80vh',
            minWidth: '100%',
            minHeight: "100%",
          },
  },
  paperContainer: {
    // height: "100%",
    // display: "flex",
    // flexDirection:"column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // color: '#FFFFFF', 
   // height: "100%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    color: '#FFFFFF', 
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down('sm')]: {
      alignItems: "flex-end",
      justifyContent: "center",
    },
   
},

  
}));
const Home = () =>{
  const classes = useStyles();
    return (
        <div >
          
         <Navbar />
          <Container  className={classes.imageBackground}> 
         
        <Box>
            <div  className={classes.paperContainer}>
            <h1>Welcome to Home Page</h1> 
            </div>
        </Box>
        </Container>
      
        </div>
      );
}

export default Home;