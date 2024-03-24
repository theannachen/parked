
import {Box, Button} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BacktoDashboardButton = () => {
    return (<Link to="/dashboard"><Box display="flex"
                 justifyContent="center" my = '8vh' >
            <Button colorScheme="blue" onClick={() => {

            }}
                    p='8'>
                Go Back to Dashboard
            </Button>
        </Box>
        </Link>
    );
};

export default BacktoDashboardButton;