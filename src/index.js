import React from 'react'
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {deepPurple, grey} from '@material-ui/core/colors/'

import { AuthProvider } from './state/auth'

import App from './App';
import './index.css'

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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
