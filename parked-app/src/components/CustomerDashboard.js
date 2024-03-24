import {Box, Button, Card, Flex, Heading, Text} from "@chakra-ui/react";
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

const HorizontalCard = ({data}) => {
    if (data.Availability.value !== "Yes") {
        return null; // Return null if availability is not "Yes"
    }

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

        </Flex>
    </Card>);
};


const CustomerDashboard = () => {

    return (<div>
        <div>
            <Text ml='55' mt='15' fontSize='25' color='teal.800' noOfLines={1}>Welcome, customer!</Text>
            <Heading ml='10' mb='4' p='3' size='3xl' color='teal.800' noOfLines={1}>Available Bookings</Heading>
            {books.map((booking) => (<HorizontalCard key={booking.$id.value} data={booking}/>))}
        </div>
    </div>);
}

export default CustomerDashboard;