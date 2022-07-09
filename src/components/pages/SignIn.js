import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormLabel } from "@material-ui/core";
import { useTranslation, Trans } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ImageBg from "../../assets/image_agri.jpg"
const theme = createTheme();

const SignIn = () =>{
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            backgroundImage: 'url(https://source.unsplash.com/random)',
            //backgroundImage: ImageBg,
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
              />
               {/* Password */}
               {t('signIn.labelPw')}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                // label="Enter your password"
                label={t('signIn.placeholderPw')}
                type="password"
                id="password"
                autoComplete="current-password"
              />

                <FormLabel>
                {t('signIn.labelRestPw')}
                  <Link href="#" variant="body2">
                  {t('signIn.linkRestPw')}
                  </Link>
               </FormLabel>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t('signIn.btnSingnIn')} 
              </Button>
              
              <Typography >
              {t('signIn.labelAC')} 
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                 {t('signIn.btnSignUp')} 
                
              </Button>
              {/* <div>
              <button onClick={() => i18n.changeLanguage('ta')}>ta</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
              </div> */}
    
   
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       Select Language
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={ () => {i18n.changeLanguage('en'); handleClose();}} >English</MenuItem>
        <MenuItem onClick={ () => {i18n.changeLanguage('ta'); handleClose();}} >Tamil</MenuItem>
        
      </Menu>
    </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default SignIn;