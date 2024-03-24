import {Box, Button, Card, Heading, IconButton, Image, StackDivider, Text} from "@chakra-ui/react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import React from "react";
import LogoBanner from "../components/LogoBanner";
import BacktoDashboardButton from "../components/BacktoDashboardButton";

const DATA = [
    {
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
    }
];

const PaymentCard = ({ data, index}) => {
    var carrier = ""
    if(data.carrier === 'm'){
        carrier = "Mastercard"
    }
    if(data.carrier === 'v'){
        carrier = "Visa"
    }
    if(data.carrier === 'd'){
        carrier = "Discover"
    }
    if(data.carrier === 'a'){
        carrier = "American Express"
    }
    return (
        <Card m='30' py='10' pl = '10%'>
            <CardHeader>
                <Heading size='lg' mb='10'>Card {index}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Card Type
                        </Heading>
                        <Text pt='2' mb = '8'>
                            {carrier}
                        </Text>
                    </Box>
                    <Box>
                        <Text pt='2' mb = '8' color='grey'>
                            **** - **** - **** - {data.last_four}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='md' textTransform='uppercase'>
                            Expiration Date
                        </Heading>
                        <Text pt='2'>
                            {data.expiration}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

const Payments = () => {
    return (<div>
            <LogoBanner/>
            {DATA.map((item, index) => (
                <PaymentCard key={item.Record_Number} data={item} index = {index + 1}/>
            ))}

            <BacktoDashboardButton/>
        </div>
    );
};

export default Payments;