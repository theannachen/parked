import {Box, Button, Card, Flex, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const DATA = [
    {
        Record_Number: 1,
        Address: '123 Main St \nNashville TN 37215',
        Zone: "",
        Available: false,
        Location_Description: "",
        Owner_ID: 5
    },
    {
        Record_Number: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        Address: '321 Oak St \nDenver, CO 12345',
        Zone: "",
        Available: true,
        Location_Description: "In the back of the house",
        Owner_ID: 2
    },
    {
        Record_Number: 3,
        Address: '135 Elm St \nArlington, VA 81725',
        Zone: "",
        Available: false,
        Location_Description: "",
        Owner_ID: 5
    },
];

const getBookings = async () => {
    try {
        const response = await axios.get("http://localhost:5600/");
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error; // Re-throw the error to handle it outside the function
    }
}

const books = await getBookings();

const HorizontalCard = ({data}) => {
    return (<Card
        p="4"
        mb="5"
        color='teal.900'
        variant='outline'
        borderWidth="2px"
        borderColor='teal.500'
        mx="20"
        _hover={{transform: "scale(1.01)"}}
        transition="transform 0.4s ease-in-out">
        <Flex alignItems="center" justifyContent="space-between">
            {console.log(data)}
            {/* Left Section */}
            <Box flex="1">
                <Text fontSize='xl' fontWeight="bold">{data.Address.value}</Text>
                {data.Zone.value && <Text>Zoning: {data.Zone.value}</Text>}
                {data.Desc.value && <Text>Additional Information: {data.Desc.value}</Text>}
            </Box>
            <Box
                mr='10'
                color='green.500'
                fontSize='5xl'>
                <Box display="inline-flex" color='green.700' fontSize='3xl'>$</Box> {data.Price.value}
            </Box>
            {/* Right Section */}
            <Link to='/booking'>
                <Button
                    colorScheme="green.500"
                    variant="outline"
                    color="green.500"
                    _hover={{bg: 'green.500', color: '#ffffff'}}
                    size="lg"
                    fontSize="2xl"
                >
                    Book now!
                </Button>
            </Link>

        </Flex>
    </Card>);
};

const HostDashboard = ({change, setDashboard}) => {

    return (
        <div>
            <div>
                <Text ml='55' mt='15' fontSize='25' color='teal.800' noOfLines={1}>Welcome back, Host!</Text>
                <Heading
                    ml='10'
                    mb='4'
                    p='3'
                    size='3xl'
                    bgGradient='linear(to-r, teal.400, green.300)'
                    bgClip='text'
                    noOfLines={1}
                >
                    Available Bookings
                </Heading>
                {books.map((booking) => (
                    <HorizontalCard key={booking.$id.value} data={booking}/>
                ))}
            </div>
        </div>
    );
}

export default HostDashboard;