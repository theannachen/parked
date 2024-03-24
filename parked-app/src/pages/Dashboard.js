import {useLogoutFunction, useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import React from "react";
import {Box, Button, Card, Flex, Text, Stack, Heading} from "@chakra-ui/react";
import AuthButtons from "../components/AuthButtons";
import NavBar from "../components/NavBar";
import LandingPage from "./LandingPage";

const bookings = ["bbb", "ccc", "ddd"];

const DATA = [
    {
        Record_Number: 1,
        Address: '123 Main St \nNashville TN 37215',
        Zone:"",
        Available: false,
        Location_Description: "",
        Owner_ID: 5
    },
    {
        Record_Number: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Address: '321 Oak St \nDenver, CO 12345',
        Zone:"",
        Available: true,
        Location_Description: "In the back of the house",
        Owner_ID: 2
    },
    {
        Record_Number: 3,
        Address: '135 Elm St \nArlington, VA 81725',
        Zone:"",
        Available: false,
        Location_Description: "",
        Owner_ID: 5
    },
];

const HorizontalCard = ({ data }) => {
    return (
        <Card p="4" mb="5" bg='tomato' mx="20">
            <Flex alignItems="center" justifyContent="space-between">
                {/* Left Section */}
                <Box flex="1">
                    <Text fontWeight="bold">{data.Address}</Text>
                    {data.Zone && <Text>Zoning: {data.Zone}</Text>}
                    {data.Location_Description && <Text>Additional Information: {data.Location_Description}</Text>}
                </Box>

                {/* Right Section */}
                <Button colorScheme="blue" variant="solid" size="md">
                    Book now!
                </Button>

            </Flex>
        </Card>
    );
};



const Dashboard = withRequiredAuthInfo(({ isLoggedIn , change}) => {
    return (
        <div>
            <NavBar change ={change}/>
            <Heading m='15' p ='5' as='h2' size='3xl' noOfLines={1}>Available Bookings</Heading>
            {DATA.map((item) => (
                <HorizontalCard key={item.Record_Number} data={item} />
            ))}
            <Box display="flex"
                 justifyContent="center">
                <Button colorScheme="blue" >
                    Click me!
                </Button>

            </Box>

        </div>);

});

export default Dashboard;