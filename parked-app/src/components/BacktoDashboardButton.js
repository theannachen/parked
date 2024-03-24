
import {Box, Button} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BacktoDashboardButton = () => {
    return (<Box display="flex"
                 justifyContent="center" my = '8vh' >
            <Link to="/dashboard">
            <Button colorScheme="blue" onClick={() => {

            }}
                    p='8'>
                Go Back to Dashboard
            </Button>
    </Link>
        </Box>

    );
};

export default BacktoDashboardButton;