import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routers from './routes/routes';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routers} />
    </ApolloProvider>
  </React.StrictMode>
)
