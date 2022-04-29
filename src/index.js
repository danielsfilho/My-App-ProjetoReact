import React from 'react'
import ReactDOM from 'react-dom/client';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './App';
import './index.css'

import {deepPurple, grey} from '@material-ui/core/colors/'

const theme = createMuiTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: deepPurple['A400'],
      darker: '#053e85',
    },
    secondary: {
      main: grey[900],
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
