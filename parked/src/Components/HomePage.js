import {StatusBar} from "expo-status-bar/build/StatusBar";
import {useLogoutFunction, useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import React from "react";

import {View, TextField, Text, Button} from 'react-native-ui-lib';

const bookings = ["bbb", "ccc", "ddd"];

const HomePage = withRequiredAuthInfo(({ isLoggedIn }) => {
    const logoutFn = useLogoutFunction()
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();

    if (isLoggedIn) {
        return (
            <View flex center bg-grey70>
                <Text>Logged In</Text>
                <StatusBar style="auto"/>
                <h1>Available Bookings</h1>

                {bookings.map((slot) => (
                    <div>{slot}</div>
                ))}
                <button onClick={() => logoutFn(true)}>
                    Click here to log out
                </button>
            </View>);
    } else {
        return <div>
            To get started, please log in as test user.
            <br/>
            <button onClick={() => redirectToSignupPage()}>
                Sign up
            </button>
            <button onClick={() => redirectToLoginPage()}>
                Log in
            </button>
        </div>
    }
});

export default HomePage;