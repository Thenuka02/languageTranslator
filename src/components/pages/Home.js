import React from "react";
import { useTranslation, Trans } from 'react-i18next';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';
import Header from "../layout/Header";
// const Home = () =>{
//     const { t, i18n } = useTranslation();

//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng);
//       };
//       <Trans i18nKey="description.part1">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </Trans>
//     return(
        
//         <div>
           
//         <h1>{t('Home Page')}</h1>
//         <button type="button" onClick={() => changeLanguage('de')}>
//           Tamil
//         </button>
//         <button type="button" onClick={() => changeLanguage('en')}>
//           English
//         </button>  
//         </div>
//     )
// }

// export default Home



const lngs = {
    en: { languageName: 'English' },
    fr: { languageName: 'French' }
  };

  const useStyles = makeStyles({
    btn: {
      
      backgroundColor: 'red',
      height: 48,
      padding: '0 30px',
    },
  });
const Home = () =>{
  const { i18n } = useTranslation();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div >
            <div> <Header /></div>
           
        {/* <Button
        id="demo-customized-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className={classes.btn}
        >
        Select
        </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div>
              {Object.keys(lngs).map((lng) => (
                <MenuItem key={lng} onClick={ () => {i18n.changeLanguage(lng); handleClose();}}> {lngs[lng].languageName}</MenuItem>
              ))}
            </div> 
             
       
       
      </Menu>
           
            <p>
              <Trans i18nKey="description.part1">
               Hello
             
              </Trans>
            </p> */}
          <h1>This is Home Page</h1> 
        </div>
      );
}

export default Home;