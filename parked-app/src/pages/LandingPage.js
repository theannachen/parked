import NavBar from "../components/NavBar";
import {Button} from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";


const LandingPage = withAuthInfo(({isLoggedIn, change}) => {
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    var text;
    if(isLoggedIn){
        text = "Dashboard";
    }
    else{
        text = "Join now!";
    }
    return (
        <div>
            <Button colorScheme="blue" onClick={() => {
                if(isLoggedIn){
                    change(<Dashboard change = {change}/>);
                }
                else{
                    text = "Dashboard";
                    redirectToLoginPage();
                }
            }}>
                {text}
            </Button>
        </div>
    );
});

export default LandingPage;