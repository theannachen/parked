import {Box, Card, Heading, IconButton, Image, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import LogoBanner from "../components/LogoBanner";
import BacktoDashboardButton from "../components/BacktoDashboardButton";
import {useAuthInfo} from "@propelauth/react";
import axios from "axios";

const DATA =
    {
        Record_Number: 1,
        first_name:"John",
        last_name:"Smith",
        email_address:"testing@testing.com",
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
// const VehicleCard = ({key, data}) => {
//
//     return (
//         <Card m='30' py='10' pl = '10%'>
//             <CardHeader>
//                 <Heading size='lg' mb='10'>{data.make_model}</Heading>
//             </CardHeader>
//             <CardBody>
//                 <Stack divider={<StackDivider />} spacing='4'>
//                     <Box>
//                         <Heading size='md' textTransform='uppercase'>
//                             License Plate:
//                         </Heading>
//                         <Text pt='2' mb = '8'>
//                             {data.license_plate}
//                         </Text>
//                     </Box>
//                 </Stack>
//             </CardBody>
//         </Card>
//     );
// };

const UserProfile = async () => {
    const email = useAuthInfo().user.email;
    let userData;

    try {
        const response = await axios.get("http://localhost:5600/getUser?email=" + email);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error; // Re-throw the error to handle it outside the function
    }
    // console.log(userData);

    return (<Box p='4'>
            <LogoBanner/>
            {/*<Box display="flex" justifyContent="space-between" alignItems="center">*/}
            {/*    <Box><Heading m='15' p='5' as='h2' size='2xl'>Personal Information</Heading></Box>*/}
            {/*</Box>*/}
            {/*<Box mb={4} mx={15} p={5}>*/}
            {/*    <Heading size='md' textTransform='uppercase' pb={3}>*/}
            {/*        First Name:*/}
            {/*    </Heading>*/}
            {/*    <Text pt='2'>{userData.first_name}</Text>*/}
            {/*</Box>*/}
            {/*<Box mb={4} mx={15} p={5}>*/}
            {/*    <Heading size='md' textTransform='uppercase' pb={3}>*/}
            {/*        Last Name:*/}
            {/*    </Heading>*/}
            {/*    <Text pt='2'>{userData.last_name}</Text>*/}
            {/*</Box>*/}
            {/*<Heading m='15' p='5' as='h2' size='2xl'>Registered Vehicles</Heading>*/}
            {/*{userData.vehicles.map((item, index) => (*/}
            {/*    <VehicleCard key={item.Record_Number} data={item}/>*/}
            {/*))}*/}
            <BacktoDashboardButton/>
        </Box>
    );
};

export default UserProfile;