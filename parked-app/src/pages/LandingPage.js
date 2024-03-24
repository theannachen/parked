import NavBar from "../components/NavBar";
import {Button, Center} from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";
import { Link } from "react-router-dom";
import React from "react";


const LandingPage = withAuthInfo(({isLoggedIn, change}) => {
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    let text = isLoggedIn ? "Dashboard" : "Join now!";
    let redirect = isLoggedIn ? "/dashboard" : "";
    return (
        <Link to="/dashboard">
            <Center>
                <Button bgColor="green.500"
                        color="white"
                        _hover={{bg: 'green.400', transform: "scale(1.02)"}}
                        size="lg"
                        fontSize="2xl"
                        p='8'>
                    Dashboard
                </Button>
            </Center>
        </Link>
    );
});

export default LandingPage;