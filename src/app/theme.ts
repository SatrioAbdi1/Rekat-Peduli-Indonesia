
'use client'
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ed4d45',
      dark: '#d02623',
      light: '#ef9794',
    },
    secondary: {
      main: '#febf55',
      light: '#fee4b6',
      dark: '#fc970d',
    },    
  },
  components : {
    MuiButtonBase :{
      defaultProps : {
        disableRipple : true
      }
    },
    },  
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;