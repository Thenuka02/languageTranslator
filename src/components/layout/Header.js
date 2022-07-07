import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Language from "../pages/Language";
import {
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Button,
  } from "@material-ui/core";
import Language from "../pages/Language";
  
  const useStyles = makeStyles((theme) => ({
  
    typography: {
      fontFamily: 'Poppins',
    },
    
    header: {
      overflowX:"none",
      display: 'inline',
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      height: "120px",
      width: "1440px",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up('sm','lg')]: {
        width: '1440px',
        height: "812px",
        display: 'inline',
      },
    },
    
    navlinks: {
      overflow: "hidden",
      paddingTop:"46px",
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: "18px",
      paddingLeft: "491px",
    
      [theme.breakpoints.up('sm', 'md','lg')]: {
         display: "flex",
      },
    },

    link: {
      textDecoration: "none",
      color: "blue",
      fontSize: "18px",
      fontFamily: "Poppins,Light",
      textAlign: "left",
      marginLeft: "60px",
    },

    btn: {
      width: "200px",
      height: "44px",
      backgroundColor: '#D63031',
      color: "#FFFFFF",
      textalign: "center",
      textDecoration: "none",
      alignItems: "center",
      fontSize: "18px",
      fontFamily: "Poppins,Regular ",
      padding: "13px 40px",
      display: "flex",
      marginLeft: "111px",
      // marginLeft: theme.spacing(16),
      "&:hover": {
        //borderBottom: "4px solid #3553C8",
        textDecoration: "none",
       
      },
     
     
    },
    
    linkBtn: {
      marginLeft: "35px",
      paddingRight: "70px",
      marginRight: "70px",
      textDecoration: "none",
      color: "#1F1F1F",
      fontSize: "18px",
      fontFamily: "Poppins",
      
    
    }
  }));
  
  const Header =() =>{
    const classes = useStyles();
    const theme = useTheme();
    return (
      
        <div className={classes.header}>
         
        <CssBaseline />
        <Toolbar  >
            <div className={classes.navlinks}>
             <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/english" className={classes.link}>
                English
              </Link>  
              <Link to="/french" className={classes.link}>
                French
              </Link>  
              <Link to="/language" className={classes.linkBtn}>
             
         
              </Link> 
              <Language />
            </div>
        </Toolbar>
  
      </div>
    );
  }
  export default Header;