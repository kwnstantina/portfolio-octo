import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routers from './routes/routes';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <ApolloProvider client={client}>
          <RouterProvider router={routers} />
        </ApolloProvider>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
)
