import {Box, Button, Card, Flex, Heading, Text} from "@chakra-ui/react";
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
    return (
        <Card p="4" mb="5" bg='tomato' mx="20">
            <Flex alignItems="center" justifyContent="space-between">
                {console.log(data)}
                {/* Left Section */}
                <Box flex="1">
                    <Text fontWeight="bold">{data.Address.value}</Text>
                    {data.Zone.value && <Text>Zoning: {data.Zone.value}</Text>}
                    {data.Desc.value && <Text>Additional Information: {data.Desc.value}</Text>}
                </Box>

                {/* Right Section */}
                <Button colorScheme="blue" variant="solid" size="md">
                    Book now!
                </Button>

            </Flex>
        </Card>
    );
};


const CustomerDashboard = () => {

    return (
        <div>
            <div>
                <Heading m='15' p='5' as='h2' size='3xl' noOfLines={1}>Customer! Available Bookings</Heading>
                {books.map((booking) => (
                    <HorizontalCard key={booking.$id.value} data={booking}/>
                ))}
            </div>
        </div>
    );
}

export default CustomerDashboard;