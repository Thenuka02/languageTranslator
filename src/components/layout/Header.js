import React from "react";
import { Link } from "react-router-dom";

import {
    Toolbar,
    CssBaseline,
    makeStyles,
  
      } from "@material-ui/core";

  const useStyles = makeStyles(() => ({
  
    typography: {
      fontFamily: 'Poppins',
    },
    
    header: {
      // overflowX:"none",
      // display: 'inline',
      // textOverflow: "ellipsis",
      // whiteSpace: "nowrap",
      height: "60px",
      width: "1100px",
      alignItems: "center",
      justifyContent: "center",
      // [theme.breakpoints.up('sm','lg')]: {
      //   width: '1440px',
      //   height: "812px",
      //   display: 'inline',
      // },
    },
    header2:{
      backgroundColor: "#D63031",
      width: '1200px',
      marginLeft: 100,
    },
    navlinks: {
      overflow: "hidden",
      paddingTop:"10px",
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: "18px",
      paddingLeft: "700px",
      // [theme.breakpoints.up('sm', 'md','lg')]: {
      //    display: "flex",
      // },
    },

    link: {
      textDecoration: "none",
      fontSize: "18px",
      fontFamily: "Poppins,Light",
      textAlign: "left",
      marginLeft: "60px",
      color: "#FFFFFF",
      '&:hover': {
        color: 'black',
      },
    },
  }));
  
  const Header =() =>{
    const classes = useStyles();
    //const theme = useTheme();
    return (
      
        <div className={classes.header}>
         
        <CssBaseline />
        <Toolbar  className={classes.header2}>
            <div className={classes.navlinks}>
             <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/signIn" className={classes.link}>
                SignIn
              </Link>  
              <Link to="/signUp" className={classes.link}>
                SignUp
              </Link>  
            </div>
        </Toolbar>
      
      </div>
    );
  }
  export default Header;