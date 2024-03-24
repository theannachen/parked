import {Box, Card, Heading, Flex, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import LogoBanner from "../components/LogoBanner";
import BacktoDashboardButton from "../components/BacktoDashboardButton";
import {useAuthInfo} from "@propelauth/react";
import axios from "axios";
import {useState} from "react";

const DATA =
    {
        Record_Number: 1,
        first_name: "John",
        last_name: "Smith",
        email_address: "testing@testing.com",
        vehicles: [{
            Record_Number: 1,
            license_plate: "B2N8V93",
            make_model: "Toyota Corolla",
        },
            {
                Record_Number: 2,
                license_plate: "MKASHFD",
                make_model: "Tesla Cybertruck",
            }],
        transaction_history: [{
            Record_Number: 1,
            Address: "123 Main St \nNashville, TN 39182",
            transaction_number: "18v9sbj2kj8",
            start_date: "05/24",
            end_date: "05/24",
            cost: 13.45
        },
            {
                Record_Number: 3,
                Address: "321 Elm St \nNashville, TN 39182",
                transaction_number: "83bv490c-49c",
                start_date: "04/24",
                end_date: "05/24",
                cost: 245.12
            }],
        payments: [{
            Record_Number: 1,
            carrier: "m",
            last_four: "8124",
            expiration: "05/24"
        },
            {
                Record_Number: 5,
                carrier: "d",
                last_four: "1304",
                expiration: "08/26"
            },
            {
                Record_Number: 3,
                carrier: "v",
                last_four: "9876",
                expiration: "04/06"
            }],
        listings: [],
    }
;

// VehicleList component
const VehicleCard = ({key, data}) => {
    return (
        <Card m='30' py='10' pl='10%'>
            <CardHeader>
                <Heading size='lg' mb='10'>{data.attributes.make} {data.attributes.model} </Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider/>} spacing='4'>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            License Plate:
                        </Heading>
                        <Text pt='2' mb='8'>
                            {data.attributes.license_plate}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

// ListingList component
const ListingCard = ({key, data}) => {
    console.log(data)
    return (
        <Card m='30' py='10' pl='10%' bgGradient='linear(to-r, white, green.100)' color='teal.800'>
            <CardHeader>
                <Heading size='lg' mb='10'>{(data.attributes.Address)} </Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider/>} spacing='4'>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Start Date
                        </Heading>
                        <Text pt='2' mb='8'>
                            {data.attributes.start_date}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            End Date
                        </Heading>
                        <Text pt='2' mb='8'>
                            {data.attributes.end_date}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Cost
                        </Heading>
                        <Text pt='2' mb='8'>
                            ${data.attributes.price}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};


async function getUserData(email) {
    try {
        const response = await fetch("http://localhost:1337/api/app-users?filters[email][$eq]=" + email + "&populate=*", {cache: "no-store"});
        return response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error; // Re-throw the error to handle it outside the function
    }
}

const UserProfile = () => {
    let userInfoPropel = useAuthInfo();
    const [userData, setUserData] = useState(null);
    const [hasGottenUser, setHasGottenUser] = useState(false);
    if (userInfoPropel.user !== undefined && !hasGottenUser) {

        getUserData(userInfoPropel.user.email).then(result => {
            // do things with the result here, like call functions with them
            if (result.data) {
                if (result.data[0]) {
                    setUserData(result.data[0]);
                    setHasGottenUser(true);
                }
            }
            // console.log(result.data[0])
        })
    }


    return (<Box p='4'>
            <LogoBanner/>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Heading
                        m='15'
                        p='5'
                        as='h2'
                        size='3xl'
                        bgGradient='linear(to-r, cyan.600, green.400)'
                        bgClip='text'
                    >
                        Personal Information
                    </Heading>
                </Box>
            </Box>
            {userData ? (
                <Box color='teal.800'>
                    <Flex direction="row" justifyContent="left">
                    <Box mb={4} mx={15} p={5}>
                        <Text size='md' textTransform='uppercase' pb={3}>
                            First Name:
                        </Text>
                        <Text pt='0' fontSize='30px' fontWeight='bold'>{userData.attributes.FirstName}</Text>
                    </Box>
                    <Box mb={4} mx={15} p={5}>
                        <Text size='md' textTransform='uppercase' pb={3}>
                            Last Name:
                        </Text>
                        <Text pt='0' fontSize='30px' fontWeight='bold'>{userData.attributes.LastName}</Text>
                    </Box>
                    </Flex>
                    <Box mb={4} mx={15} p={5}>
                        <Text size='md' textTransform='uppercase' pb={3}>
                            Email Address:
                        </Text>
                        <Text pt='0' fontSize='30px' fontWeight='bold'>{userData.attributes.email}</Text>
                    </Box>
                    <Heading m='15' p='5' as='h2' size='2xl'>Registered Vehicles</Heading>
                    {userData.attributes.vehicles.data.length > 0 ? (
                        userData.attributes.vehicles.data.map((item, index) => (
                            <VehicleCard key={item.id} data={item}/>
                        ))
                    ) : (
                        <Text m='15' p='5'>No vehicles registered</Text>
                    )}
                    <Heading m='15' p='5' as='h2' size='2xl'>Listings</Heading>
                    {userData.attributes.listings.data.length > 0 ? (
                        userData.attributes.listings.data.map((item, index) => (
                            <ListingCard key={item.id} data={item}/>
                        ))
                    ) : (
                        <Text m='15' p='5'>No listings registered</Text>
                    )}

                </Box>
            ) : (
                <div/>
            )}

            <BacktoDashboardButton/>
        </Box>
    );
};

export default UserProfile;