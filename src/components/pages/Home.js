import React from "react";
import Header from "../layout/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core";

const backgroundImage = require('../../assets/image_Bg.jpg');


const styles = {
  paperContainer: {
      position: 'absolute',
      fontSize: "32px",
      color: '#FFFFFF', 
      top: "200px",
      left: "300px",
  }
};
const useStyles = makeStyles((theme) => ({
  
  imageBackground: {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh' ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //width: '100%',
    overflow: 'hidden',
    position: 'relative',
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.up('sm')]: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300,
          },
  },

}));
const Home = () =>{
  const classes = useStyles();
    return (
        <div >
          <div> <Header /></div>
          <h1>Welcome to Home Page</h1> 
        {/* <Container  className={classes.imageBackground}>
         
        <Box 
        
        //  sx={{   
        //   backgroundImage: `url(${backgroundImage})`,
        //   height: '100vh' ,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        //   width:"1440px",
        //   position: 'relative',
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   bottom: 0,
          
        // }}>
        >
            <div style={styles.paperContainer}>
            <h1>Welcome to Home Page</h1> 
            </div>
        </Box>
        </Container> */}
      
        </div>
      );
}

export default Home;