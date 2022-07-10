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
const useStyles = makeStyles(() => ({
  
  imageBackground: {
    height: '100vh' ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },

}));
const Home = () =>{
  const classes = useStyles();
    return (
        <div >
          <div> <Header /></div>
         
        <Container  className={classes.imageBackground}>
        <Box 
         sx={{   
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh' ,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width:"1200px",
          position: 'relative',
          overflow: "hidden",
        }}>
            <div style={styles.paperContainer}>
            <h1>Welcome to Home Page</h1> 
            </div>
        </Box>
        </Container>
        </div>
      );
}

export default Home;