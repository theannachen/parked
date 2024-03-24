import {Box, Checkbox, Button, Image, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomerDashboard from "../components/CustomerDashboard";
import thanks_img from '../assets/thank_you.png';
import logo from "../assets/parked_logo.png";
import React, { useState } from "react";




const Booking = () => {

    const [processing, setProcessing] = useState(true);

    const paymentProcessed = () => {
        setProcessing(false)
    };

    return processing ? (
        <Box>
            <Heading
                textAlign='Center'
                ml='10'
                mb='4'
                p='6'
                size='2xl'
                color='teal.800'
                noOfLines={1}>
                Confirm Payment
            </Heading>
            <Checkbox colorScheme='green' size='lg'>
                Confirm
            </Checkbox>
            <Button
                m='7'
                size='xl'
                mx="auto"
                display="block"
                colorScheme="teal.500"
                variant="outline"
                color="teal.500"
                _hover={{bg: 'teal.500', color: '#ffffff'}}
                size="lg"
                fontSize="2xl"
                onClick={paymentProcessed}
            >
                Confirm
            </Button>
        </Box>
    ) : (
        <Box>
            <Image p='7' w="75%" mx="auto" display="block" src={thanks_img} alt='thank you!'></Image>
            <Text m='10' fontSize='20px' textAlign='center' color='teal.800'>
                Your booking has been processed and added to your account.
            </Text>
            <Link to="/dashboard">
                <Button
                    m='7'
                    size='xl'
                    mx="auto"
                    display="block"
                    colorScheme="teal.500"
                    variant="outline"
                    color="teal.500"
                    _hover={{bg: 'teal.500', color: '#ffffff'}}
                    size="lg"
                    fontSize="2xl"
                >
                    Back to Dashboard
                </Button>
            </Link>
        </Box>
    )
}


export default Booking;