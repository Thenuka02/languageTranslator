import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
const lngs = {
    en: { languageName: 'English' },
    ta: { languageName: 'Tamil' },
    fr: { languageName: 'French' },
    cn: { languageName: 'Chinese'}
  };

  const useStyles = makeStyles({
    btn: {
      width: "100px",
      height: "44px",
      backgroundColor: '#D63031',
      color: "#FFFFFF",
     
    },
  });
const Language = () =>{
  // const { i18n } = useTranslation();
  const [t, i18n] = useTranslation('languageTranslation');
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
        <div  className={classes.btn}>   
        <Button
        id="demo-customized-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className={classes.btn}
        >
        Select
        </Button>
        </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'color': 'white',
        }}
      >
        {/* <div>
              {Object.keys(lngs).map((lng) => (
                <MenuItem key={lng} onClick={ () => {i18n.changeLanguage(lng); handleClose();}}> {lngs[lng].languageName}
                 
                </MenuItem>  
              ))}
            </div>  */}
      </Menu>
            
            <p>
              <Trans i18nKey="description.part1">
              Hello, welcome to Home page!!
              </Trans>
            </p>
            <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
        </div>

        
      );
}

export default Language;