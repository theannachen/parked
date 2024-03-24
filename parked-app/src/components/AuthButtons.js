import { Box, Button } from "@chakra-ui/react";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";

const AuthButtons = withAuthInfo(({isLoggedIn}) => {
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();

    return (
        <Box>
            <Button colorScheme="blue" mr={4} onClick={() => redirectToLoginPage()}>
                Sign In
            </Button>
            <Button colorScheme="green" onClick={() => redirectToSignupPage()}>
                Sign Up
            </Button>
        </Box>
    );
})

export default AuthButtons;