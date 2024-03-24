import {Box, Divider, Image, Stack} from "@chakra-ui/react";
import logo from "../assets/parked_logo.png";
import React from "react";

const LogoBanner = () => {
    return (<Stack>
            <Box display="flex"
                justifyContent="center" py='2'
                bg='white'>
                <Image objectFit={"contain"} src={logo} alt='logo' htmlWidth='20%'/>
            </Box>
            <Divider colorScheme = 'teal' size='lg'/>
            </Stack>
    );
};

export default LogoBanner;