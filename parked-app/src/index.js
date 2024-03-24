import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './pages/LandingPage';
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from '@propelauth/react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import UserProfile from "./pages/UserProfile";
import Payments from "./pages/Payments";
import History from "./pages/History";
import AddListing from "./pages/AddListing";
import AddPayment from "./pages/AddPayment";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider authUrl={process.env.REACT_APP_PROPELAUTH_AUTH_URL}>
          <BrowserRouter>
              <ChakraProvider>
                  <Routes>
                      <Route path="/" element={<App />} />
                      <Route path="/landing" element={<Landing />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/booking" element={<Booking />} />
                      <Route path="/profile" element={<UserProfile />} />
                      <Route path="/payments" element={<Payments />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/addListing" element={<AddListing />} />
                      <Route path="/addPayment" element={<AddPayment />} />
                  </Routes>
              </ChakraProvider>
          </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


