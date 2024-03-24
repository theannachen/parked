import NavBar from "../components/NavBar";
import {
    Box,
    Button, Center,
    Divider,
    Heading,
    Image,
    Link,
    SimpleGrid,
    StackDivider,
    Text,
    HStack,
    VStack,
    Stack,
    Card,
    CardHeader,
    CardBody,
} from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";
import logo from '../assets/parked_logo.png';
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import backgroundImage from '../assets/more_gradient.png';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const LandingPage = withAuthInfo(({isLoggedIn, change, deviceType}) => {
    const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    let text = isLoggedIn ? "Dashboard" : "Join now!";
    let redirect = isLoggedIn ? "/dashboard" : "";
    // background images

    const cards = [
        { title: "Concerts & Events", text: "Reserve parking for events in advance and save time for the show, not the search." },
        { title: "City Shopping", text: "Your empty space could be a shopper's treasure. List it and benefit from the bustle." },
        { title: "Air Travel", text: "Jet set stress-free knowing your car is parked just a shuttle away." },
        { title: "Sporting Events", text: "Game on! Secure your parking early and cheer for your team without the pre-game parking hassle." },
        { title: "Commuter Parking", text: "Make your daily commute easier with a guaranteed spot close to your office." },
        { title: "Downtown Dining", text: "Savor the flavor of downtown dining without the sour taste of parking troubles." },
        { title: "Churches & Schools", text: "Support your community by offering your lot during services and school events, turning empty space into meaningful income." },
        { title: "Hospital Visits", text: "Focus on your loved ones, not on finding parking, during hospital visits." },
        { title: "Rural Retreats & Events", text: "Transform your open land into a venue for weddings, festivals, and retreats with ample parking from Parked." }
        { title: "Beachfront Parking", text: "Catch the wave of opportunity by listing your seaside space. Parked brings beachgoers directly to your door." },
        { title: "Historic Sites", text: "Your nearby lot could be the gateway to history. Offer parking that's as convenient as it is cultural." },
        { title: "Food Truck Frenzy", text: "Be the go-to lot for foodies on the move. List your space for hungry patrons looking for their next culinary adventure." },
        { title: "Outdoor Markets", text: "Give shoppers the gift of convenience with easy parking at weekend markets. It's local commerce made simple." },
        { title: "Pop-Up Events", text: "From art shows to pop-up shops, your parking space can be the hotspot for the latest local event scene." },


    ];

    return (
        <Box
            bgImage={`url(${backgroundImage})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="full"
            h="full"
        >
        <VStack>
            <Box
            paddingTop={170}>
                <Center w='300px'>
                <Image objectFit='cover'
                       src={logo} alt='logo'/>
                </Center>
            </Box>
            <Box
                size='lg'
                textAlign='right'
                paddingRight={5}>
                <Heading fontSize='100px'
                         fontFamily="helvetica"
                         color='teal'
                         textShadow='0px 0px 25px white'>
                    Where Every Space Counts
                </Heading>
                <Text
                    fontSize='xl'
                    as='em'
                    padding={5}
                    fontFamily="helvetica"
                    textShadow='0px 0px 10px white'>
                    Join the community transforming spaces into opportunities </Text>
            </Box>
            <HStack
                spacing='10px'
                divider={<StackDivider borderColor='teal' h='120px' w='5' align="center"/>}
                spacing={4}
                align='stretch'
                padding={5}
                fontFamily="helvetica"
                textShadow='0px 0px 20px white'
            >
                <Box
                    textAlign='Left'
                    paddingLeft={5}>
                    <Heading as='h2' size='lg' color='teal'>For Hosts</Heading>
                    <Heading fontSize='md' as='em'>Maximize your space's potential</Heading>
                    <Text fontSize='2xl'> Turn any spot into a profit with Parked. Listing is simple, secure, and
                    supports your financial goals.</Text>
                </Box>
                <Box
                    textAlign='right'
                    paddingRight={5}>
                    <Heading as='h2' size='lg' color='teal'>For Drivers</Heading>
                    <Heading fontSize='md' as='em'>Park with ease anywhere</Heading>
                    <Text fontSize='2xl'> Access the best spots at the best prices. With Parked, convenient parking is
                    always just a tap away</Text>
                </Box>
            </HStack>
            <Box
                fontFamily="helvetica"
                align="center">
                <Link to="/dashboard">
                    <Button size='lg' shadow = '0px 0px 50px white' colorScheme="teal" onClick={() => {
                        if(isLoggedIn){

                        }
                        else{
                            text = "Join now!";
                            redirectToLoginPage();
                        }
                    }}>
                        Join Now!
                    </Button>
                </Link>
            </Box>
            <Box position="relative" w="full" p={5}>
                <Carousel
                    swipeable
                    draggable
                    responsive={responsive}
                    ssr // Server-side rendering
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    keyBoardControl
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={200}

                >
                    {cards.map((card, index) => (
                        <Box key={index} p={4}>
                            <Card textAlign={"center"} borderRadius='xl' shadow='lg'>
                                <CardHeader>
                                    <Heading size='md'>{card.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{card.text}</Text>
                                </CardBody>
                            </Card>
                        </Box>
                    ))}
                </Carousel>
                {}
                <Box position="absolute" left="0" top="0" bottom="0" width="250px" zIndex="5"
                     style={{
                         background: 'linear-gradient(to right, white, transparent)'
                     }}
                />
                <Box position="absolute" right="0" top="0" bottom="0" width="250px" zIndex="5"
                     style={{
                         background: 'linear-gradient(to left, white, transparent)'
                     }}
                />
            </Box>
        </VStack>
        </Box>
    );
});

export default LandingPage;