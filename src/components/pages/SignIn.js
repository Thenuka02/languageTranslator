import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormLabel } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useFormik } from "formik";
import * as yup from 'yup';
import { makeStyles } from "@material-ui/core/styles";

const backgroundImage = require('../../assets/image_agri.jpg');

const theme = createTheme();

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: 32,
      paddingLeft: 8,
      paddingRight: 8,
      "& .MuiButton-startIcon": {
         margin: 0
        
      }
    }
  },
  buttonText: {
    underline: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const validationSchema = yup.object({
  userName: yup
    .string('Enter your user name')
    .required('User name is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});



const SignIn = () =>{
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [t, i18n] = useTranslation('languageTranslation');
  
  return (
   
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         
        />
        <Grid item xs={12}  sm={8} md={5} component={Paper} elevation={6} square>
      
      
          <Box
            sx={{
              my: 8,
              mx: 4,
              mt:12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to="/" >
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<HomeIcon />}
            sx={{ mt: 3, ml: 1 }}
            >
            <span className={classes.buttonText} >Home</span>
            </Button>
            </Link>
            
            <form onSubmit={formik.handleSubmit}>
          
               
                {/* User Name */}
                {t('signIn.labelUser')}
              <TextField
                margin="normal"
                fullWidth
                id="name"
                // label="Enter your username"
                placeholder={t('signIn.placeholderUser')}
                name="userName"
                autoComplete="name"
                autoFocus
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
                helperText={formik.touched.userName && formik.errors.userName}
               
              />
               
               {t('signIn.labelPw')}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                placeholder={t('signIn.placeholderPw')}
                type="password"
                id="password"
                autoComplete="current-password"
                
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
                  
                <FormLabel>
                {t('signIn.labelRestPw')}
                  <Link  to="/" variant="body2">
                  {t('signIn.linkRestPw')}
                  </Link>
               </FormLabel>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               // disabled={!isValid}
              >
                {t('signIn.btnSingnIn')} 
              </Button>
              
              <Typography >
              {t('signIn.labelAC')} 
              </Typography>
              <Link to="/signUp" >
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                 {t('signIn.btnSignUp')} 
                
              </Button>
              </Link>  
   
              <div>
              <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Select Language</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
              <FormControlLabel value="en" control={<Radio /> } onClick={ () => {i18n.changeLanguage('en')}} label="English" />
              <FormControlLabel value="ta" control={<Radio />} onClick={ () => {i18n.changeLanguage('ta')}}  label="Tamil" />
              </RadioGroup>
              </FormControl>
              </div>
          
            </form>
          
          </Box>
         
        </Grid>
        
      </Grid>
      
    </ThemeProvider>
  );
}

export default SignIn;