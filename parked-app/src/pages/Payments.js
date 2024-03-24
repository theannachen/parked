import {Box, Button, Card, Flex, Heading, IconButton, Image, MenuButton, StackDivider, Text} from "@chakra-ui/react";
import {CardBody, CardHeader, Stack} from "react-bootstrap";
import logo from "../assets/parked_logo.svg";
import React from "react";
import {AddIcon, HamburgerIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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
            <Box display="flex"
                 justifyContent="center" py='2'
            bg='tomato'>
                <Image objectFit={"contain"} src={logo} alt='logo' htmlWidth='20%'/>

            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box><Heading m='15' p ='5' as='h2' size='3xl'>Payment Methods</Heading></Box>
                <Box><IconButton
                    m='15' p ='5'
                    aria-label='Options'
                    icon={<AddIcon/>}
                    variant='outline'
                    size="lg"
                /></Box>
            </Box>
            {DATA.map((item, index) => (
                <PaymentCard key={item.Record_Number} data={item} index = {index + 1}/>
            ))}
            <Box display="flex"
                 justifyContent="center" my = '8vh' >
                <Link to="/dashboard">
                    <Button bgColor="green.500"
                            color="white"
                            _hover={{bg: 'green.400', transform: "scale(1.02)"}}
                            size="lg"
                            fontSize="2xl"
                            p='8'>
                        Go Back to Dashboard
                    </Button>
                </Link>
            </Box>
        </div>
    );
};

export default Payments;