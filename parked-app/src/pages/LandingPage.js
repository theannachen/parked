import { Box, Button } from "@chakra-ui/react";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";
import AuthButtons from "../components/AuthButtons";

const LandingPage = withAuthInfo(({isLoggedIn}) => {

    return (
        <AuthButtons/>
    );
})

export default LandingPage;