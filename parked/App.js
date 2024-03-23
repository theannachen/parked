import React from "react";
import {AuthProvider, useLogoutFunction, useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";

const App = () => {
    return (
        <AuthProvider authUrl={process.env.EXPO_PUBLIC_PROPELAUTH_AUTH_URL}>
            <BrowserRouter>
                <div>
                    <h1>My React App</h1>
                    <HomePage />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;