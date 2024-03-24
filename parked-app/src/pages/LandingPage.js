import NavBar from "../components/NavBar";
import {Button} from "@chakra-ui/react";
import Dashboard from "./Dashboard";

const LandingPage = ({change}) => {
    return (
        <div>
            <NavBar/>

            <Button colorScheme="blue" onClick={() => {
                change(<Dashboard change ={change}/>);
            }}>
                Click me!
            </Button>
        </div>
    );
};

export default LandingPage;