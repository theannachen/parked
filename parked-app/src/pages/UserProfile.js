import {Box, Card, Heading, IconButton, Image, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import logo from "../assets/parked_logo.svg";
import {AddIcon} from "@chakra-ui/icons";
import LogoBanner from "../components/LogoBanner";

const DATA =
    {
        Record_Number: 1,
        first_name:"John",
        last_name:"Smith",
        vehicles:[{
            Record_Number: 1,
            license_plate: "B2N8V93",
            make_model: "Toyota Corolla",
        },
            {
                Record_Number: 2,
                license_plate: "MKASHFD",
                make_model: "Tesla Cybertruck",
            }],
        transaction_history:[{
            Record_Number: 1,
            Address: "123 Main St \nNashville, TN 39182",
            transaction_number: "18v9sbj2kj8",
            start_date:"05/24",
            end_date:"05/24",
            cost: 13.45
        },
            {
                Record_Number: 3,
                Address: "321 Elm St \nNashville, TN 39182",
                transaction_number: "83bv490c-49c",
                start_date:"04/24",
                end_date:"05/24",
                cost: 245.12
            }],
        payments:[{
            Record_Number: 1,
            carrier: "m",
            last_four:"8124",
            expiration:"05/24"
        },
            {
                Record_Number: 5,
                carrier: "d",
                last_four:"1304",
                expiration:"08/26"
            },
            {
                Record_Number: 3,
                carrier: "v",
                last_four:"9876",
                expiration:"04/06"
            }],
        listings:[],
    }
;

// VehicleList component
const VehicleCard = ({key, data}) => {
    return (
        <Card m='30' py='10' pl = '10%'>
            <CardHeader>
                <Heading size='lg' mb='10'>{data.make_model}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            License Plate:
                        </Heading>
                        <Text pt='2' mb = '8'>
                            {data.license_plate}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

const UserProfile = () => {
    const userData = DATA

    return (<div p={4}>
            <LogoBanner/>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box><Heading m='15' p ='5' as='h2' size='3xl'>Payment Methods</Heading></Box>
            </Box>
            <Box mb={4}>
                <Text fontWeight="bold">First Name:</Text>
                <Text>{userData.first_name}</Text>
            </Box>

            <Box mb={4}>
                <Text fontWeight="bold">Last Name:</Text>
                <Text>{userData.last_name}</Text>
            </Box>
            {userData.vehicles.map((item, index) => (
                <VehicleCard key={item.Record_Number} data={item}/>
            ))}
            </div>
    );
};

export default UserProfile;