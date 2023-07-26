import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProviderWrapper from './theme/ThemeProvider';
import App from './App';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { SnackbarProvider } from 'notistack';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
        <SnackbarProvider>
          <ThemeProviderWrapper>
            <Provider store={store}>
              <CssBaseline/>
              <App />
            </Provider>
          </ThemeProviderWrapper>
        </SnackbarProvider>
      </>
);

