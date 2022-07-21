import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "white",
        fontSize: "16px",
        "&:hover": {
          color: "#212121",
          
        },
    },
    icon:{
        color: "white"
    },
    list:{
      height:"100vh",
      backgroundColor:"#212121",
      
    },
    listItem:{
      backgroundColor:"#424242",
      '&:hover': {
        backgroundColor: '#616161',
      },
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    < div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.list}>
        <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)} className={classes.listItem}>
            <ListItemText>
              <Link to="/signIn" className={classes.link}>Sign In</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}className={classes.listItem}>
            <ListItemText>
              <Link to="/signUp" className={classes.link}>Sign Up</Link>
            </ListItemText>
          </ListItem >
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export default DrawerComponent;