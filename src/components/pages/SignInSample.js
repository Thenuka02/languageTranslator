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
import { validator } from "../../form/Validator";
import useForm from "../../form/useForm";

const backgroundImage = require('../../assets/image_agri.jpg');

const theme = createTheme();

const SignInSample = () =>{
  const initState = {
    userName: "",
    password: "",
    
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(" Submited");
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    state,
    errors,
  } = useForm({
    initState,
    callback: submit,
    validator
  });

  let isValidForm =
    Object.values(errors).filter(error => typeof error !== "undefined")
      .length === 0;

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
      
       <form onSubmit={handleSubmit}>
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
            <div>
            <Link to="/">
            <HomeIcon  sx={{ ml: 50, }}/> 
            </Link>
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                {/* User Name */}
                {t('signIn.labelUser')}
              <TextField
                margin="normal"
                fullWidth
                id="name"
                // label="Enter your username"
                label={t('signIn.placeholderUser')}
                name="userName"
                autoComplete="name"
                autoFocus
                onChange={handleChange}
                error={errors.userName ? true : false}
                helperText={errors.userName}
                onBlur={handleBlur}
                defaultValue={state.userName}
              />
               {/* Password */}
               {t('signIn.labelPw')}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label={t('signIn.placeholderPw')}
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue={state.password}
                onChange={handleChange}
                error={errors.password ? true : false}
                helperText={errors.password}
                onBlur={handleBlur}
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
                disabled={!isValidForm}
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
            </Box>
          </Box>
          </form>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default SignInSample;