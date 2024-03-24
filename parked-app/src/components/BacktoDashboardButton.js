
import {Box, Button, Center} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BacktoDashboardButton = () => {
    return (
        <Link to="/dashboard">
            <Center>
                <Button bgColor="green.500"
                        color="white"
                        _hover={{bg: 'green.400', transform: "scale(1.02)"}}
                        size="lg"
                        fontSize="2xl"
                        p='8'>
                    Go Back to Dashboard
                </Button>
            </Center>
        </Link>
    );
};

export default BacktoDashboardButton;