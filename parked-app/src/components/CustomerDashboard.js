import {Box, Button, Card, Flex, Heading, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import axios from "axios";


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

const gradientColors = [
    "linear(to-r, green.400, teal.300)",
    "linear(to-r, yellow.400, green.400)",
    "linear(to-r, orange.300, yellow.400)",
];

const HorizontalCard = ({data, index}) => {
    if (data.Availability.value != 'Yes') {
        return null;
    }
    return (<Card
        p="4"
        mb="5"
        color='white'
        bgGradient={gradientColors[index % 3]}
        mx="20"
        _hover={{transform: "scale(1.01)"}}
        transition="transform 0.4s ease-in-out">
        <Flex alignItems="center" justifyContent="space-between">
            {console.log(data)}
            {/* Left Section */}
            <Box flex="1">
                <Text fontSize='2xl' fontWeight="bold">{data.Address.value}</Text>
                {data.Zone.value && <Text>Zoning: {data.Zone.value}</Text>}
                {data.Desc.value && <Text>Additional Information: {data.Desc.value}</Text>}
            </Box>
            <Box
                mr='10'
                fontSize='5xl'>
                <Box display="inline-flex" opacity="70%" fontSize='3xl'>$</Box> {data.Price.value}
            </Box>
            {/* Right Section */}
            <Link to='/booking'>
                <Button
                    colorScheme="white"
                    variant="outline"
                    color="white"
                    _hover={{bg: "rgba(255,255,255,.7)", color: "teal.500"}}
                    size="lg"
                    fontSize="2xl"
                >
                    Book now!
                </Button>
            </Link>

        </Flex>
    </Card>);
};


const CustomerDashboard = () => {
    return (
        <Box>
            <Text ml='55' mt='15' fontSize='25' color='teal.600' noOfLines={1}>Welcome, customer!</Text>
            <Heading
                ml='10'
                mb='4'
                p='3'
                size='3xl'
                bgGradient='linear(to-r, cyan.600, green.300)'
                bgClip='text'
                noOfLines={1}
            >
                Available Bookings
            </Heading>
            {books.map((booking, index) => (
                <HorizontalCard key={booking.$id.value} data={booking} index={index}/>
            ))}
        </Box>);
}

export default CustomerDashboard;