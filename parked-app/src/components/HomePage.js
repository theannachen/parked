import {useLogoutFunction, useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import React from "react";
import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";

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

// const Item = ({item}) => (
//     <View flex center>
//         <Card
//             onPress={() => console.log('pressed')}
//             width={'80%'}
//             borderRadius={10}
//             margin-20
//             containerStyle={{ backgroundColor: '#E5E5E5', padding: 20 }}
//             activeOpacity={0.8}
//         >
//             <View row>
//                 <Card.Section
//                     padding-20
//                     flex
//                     content={[
//                         { text: item.Address, text50: true},
//                         { text: item.Zone, text80: true, $textDefault: true},
//                         { text: item.Location_Description, text70: true, $textDefault: true },
//                     ]}
//                 />
//                 <Card.Section
//                     padding-50
//                     style={{ backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center' }}
//                     content={[{ text: 'Book Now!', text70: true, white: true }]}
//                 />
//             </View>
//         </Card>
//     </View>
// );

const HorizontalCard = ({ data }) => {
    return (
        <Card p="4" mb="4">
            <Flex alignItems="center" justifyContent="space-between">
                {/* Left Section */}
                <Box flex="1">
                    <Text fontWeight="bold">{data.Address}</Text>
                    {data.Zone && <Text>{data.Zone}</Text>}
                    {data.Location_Description && <Text>{data.Location_Description}</Text>}
                </Box>

                {/* Right Section */}
                <Button colorScheme="blue">Book now!</Button>
            </Flex>
        </Card>
    );
};

const HomePage = withRequiredAuthInfo(({ isLoggedIn }) => {
    const logoutFn = useLogoutFunction()
    return (
        <div>
            {/*<StatusBar style="auto"/>*/}
            <h1>Available Bookings</h1>
            {/*<SafeAreaView >*/}
            {/*    <FlatList*/}
            {/*        data={DATA}*/}
            {/*        renderItem={({item}) => <Item item={item} />}*/}
            {/*        keyExtractor={item => item.Record_Number}*/}
            {/*    />*/}
            {/*</SafeAreaView>*/}
            {DATA.map((item) => (
                <HorizontalCard key={item.Record_Number} data={item} />
            ))}
            <button onClick={() => logoutFn(true)}>
                Click here to log out
            </button>
        </div>);

});

export default HomePage;