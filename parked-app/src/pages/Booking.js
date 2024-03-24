import {Box, Checkbox, Button, Image, Heading, Text} from "@chakra-ui/react";
import {Link, useHistory} from "react-router-dom";
import CustomerDashboard from "../components/CustomerDashboard";
import thanks_img from '../assets/thank_you.png';
import logo from "../assets/parked_logo.png";
import React, {useEffect, useState} from "react";
import BacktoDashboardButton from "../components/BacktoDashboardButton";
import axios from "axios";
import {useAuthInfo} from "@propelauth/react";


async function getUserData(email) {
    try {
        const response = await fetch("http://localhost:1337/api/app-users?filters[email][$eq]=" + email + "&populate=*", {cache: "no-store"});
        return response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error; // Re-throw the error to handle it outside the function
    }
}

const Booking = () => {let userInfoPropel = useAuthInfo();
    const [userData, setUserData] = useState(null);
    const [hasGottenUser, setHasGottenUser] = useState(false);


    const [uid, setuid] = useState(undefined);
    const [processing, setProcessing] = useState(true);
    if (userInfoPropel.user !== undefined && !hasGottenUser) {

        getUserData(userInfoPropel.user.email).then(result => {
            // do things with the result here, like call functions with them
            if (result.data) {
                if (result.data[0]) {
                    setUserData(result.data[0]);
                    setHasGottenUser(true);
                }
            }
        })
    }
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
                    buyer: userData.id
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