import NavBar from "../components/NavBar";
import {Button, Link} from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";


const LandingPage = withAuthInfo(({isLoggedIn, change}) => {
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    let text = isLoggedIn ? "Dashboard" : "Join now!";
    let redirect = isLoggedIn ? "/dashboard" : "";
    return (
        <div>
            <Link to="/dashboard/">
                <Button colorScheme="blue">
                    {text}
                </Button>
            </Link>
        </div>
    );
});

export default LandingPage;