import React from "react";
import {AuthProvider, useLogoutFunction, useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./src/Components/HomePage";
import {View, TextField, Text, Button} from 'react-native-ui-lib';


const App = () => {
    return (
        <AuthProvider authUrl={process.env.EXPO_PUBLIC_PROPELAUTH_AUTH_URL}>
            <BrowserRouter>
                <div>
                    <HomePage />
                </div>

            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;