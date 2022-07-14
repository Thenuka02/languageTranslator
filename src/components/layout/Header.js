// import React from "react";
// import { Link } from "react-router-dom";

// import {
//     Toolbar,
//     CssBaseline,
//     makeStyles,
  
//       } from "@material-ui/core";

//   const useStyles = makeStyles((theme) => ({
//     typography: {
//       fontFamily: 'Poppins',
//     },
    
//     header: {
//       // overflowX:"none",
//       // display: 'inline',
//       // textOverflow: "ellipsis",
//       // whiteSpace: "nowrap",
//       height: "60px",
//       width: "1100px",
//       alignItems: "center",
//       justifyContent: "center",
//       // [theme.breakpoints.up('sm','lg')]: {
//       //   width: '1440px',
//       //   height: "812px",
//       //   display: 'inline',
//       // },
//     },
//     header2:{
//       backgroundColor: "#D63031",
//        width: '1365px',
//       height: "60px",
      
//     },
//     navlinks: {
//       overflow: "hidden",
//       paddingTop:"10px",
//       display: "flex",
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: "18px",
//       paddingLeft: "500px",
//       // [theme.breakpoints.up('sm', 'md','lg')]: {
//       //    display: "flex",
//       // },
//     },

//     link: {
//       textDecoration: "none",
//       fontSize: "18px",
//       fontFamily: "Poppins,Light",
//       textAlign: "left",
//       marginLeft: "60px",
//       color: "#FFFFFF",
//       '&:hover': {
//         color: 'black',
//       },
//     },
//   }));
  
//   const Header =() =>{
//     const classes = useStyles();
//     //const theme = useTheme();
//     return (
      
//         <div className={classes.header}>
         
//         <CssBaseline />
//         <Toolbar  className={classes.header2}>
//             <div className={classes.navlinks}>
//              <Link to="/" className={classes.link}>
//                 Home
//               </Link>
//               <Link to="/signIn" className={classes.link}>
//                 SignIn
//               </Link>  
//               <Link to="/signUp" className={classes.link}>
//                 SignUp
//               </Link>  
//             </div>
//         </Toolbar>
      
//       </div>
//     );
//   }
//   export default Header;


import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

//import { Link } from "react-router-dom";
import {Toolbar,makeStyles, AppBar } from "@material-ui/core";
    
const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex", 
    fontSize: 16,
    color: "#FFFFFF",
           '&:hover': {
            color: 'black',
        },
    ml: 3,
  } ,
  toolbar: {
    backgroundColor: "#D63031",
    height: 60,
    [theme.breakpoints.up('sm')]: {
      height: 75,
    },
  }
}));  

const rightLink = {
  fontSize: 18,
  color: "#FFFFFF",
       '&:hover': {
        color: 'black',
    },
  ml: 6,
};

const Header =() =>{
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }} className={classes.toolbar}>
         
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              //className={classes.link}
              sx={rightLink}
            >
              {'Home'}
            </Link>
            
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signIn"
              sx={rightLink}
              //className={classes.link}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/signUp"
              sx={rightLink}
              //className={classes.link}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;  