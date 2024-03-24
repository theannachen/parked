import {Box, Checkbox, Button, Image, Heading, Text} from "@chakra-ui/react";
import {Link, useHistory} from "react-router-dom";
import CustomerDashboard from "../components/CustomerDashboard";
import thanks_img from '../assets/thank_you.png';
import logo from "../assets/parked_logo.png";
import React, {useEffect, useState} from "react";
import BacktoDashboardButton from "../components/BacktoDashboardButton";
import axios from "axios";




const Booking = () => {
    const [uid, setuid] = useState(undefined);
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setuid(queryParams.get("uid"));
        console.log("UID:", uid);
    }, []);

    if(uid == null){
        return <BacktoDashboardButton/>
    }


    const paymentProcessed = async () => {
        console.log(uid)
        await axios.post(
            `http://localhost:1337/api/transactions`,
            {
                data: {
                    uid: "adlkjh" + uid,
                    listing: uid,
                    buyer: 1
                }
            }
        );
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
            <Box m={7} py='10'>
                <Checkbox colorScheme='green' size='lg' mb={10}>
                    Confirm
                </Checkbox>
                <Button
                    size='xl'
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
            <BacktoDashboardButton/>
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