
import {Box, Button} from "@chakra-ui/react";
import React from "react";

const BacktoDashboardButton = () => {
    return (<Box display="flex"
                 justifyContent="center" my = '8vh' >
            <Button colorScheme="blue" onClick={() => {

            }}
                    p='8'>
                Go Back to Dashboard
            </Button>
        </Box>
    );
};

export default BacktoDashboardButton;