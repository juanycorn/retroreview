import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/Landingpage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/about',
        element: <About/>
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/login',
        element: <Login />       
      }, {
        path: '/signup',
        element: <SignUp />  
      }, {
        path: '/games',
        element: <Games /> 
      }, {
        path: '/games/:slug',
        element: <GameDetail /> 
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

