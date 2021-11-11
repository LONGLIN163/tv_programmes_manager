import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import {grey, amber} from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      main:grey[900]
    },
    secondary: {
      main:amber[500],
      light:amber[200],
      dark:amber[800]
    },
    type:'dark',
    spacing:{
      unit:10
    }
  },
});

//console.log("index---theme---",theme)


ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


