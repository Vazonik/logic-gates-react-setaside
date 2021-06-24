import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './components/App';
import DarkTheme from './themes/dark.js';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
