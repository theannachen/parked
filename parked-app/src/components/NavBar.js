import React from 'react';
import {
    Flex,
    Box,
    Text,
    Switch,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    IconButton, Center, MenuDivider,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react'
import logo from '../assets/parked_logo.png';
import LandingPage from "../pages/LandingPage";
import {useLogoutFunction, withRequiredAuthInfo} from "@propelauth/react";
import {useState} from "react";
import { Link } from "react-router-dom";

const NavBar =  withRequiredAuthInfo(({ isLoggedIn , change, setDashboard, getIsHost}) => {
    // var switchComponent;
    const [checked, setChecked] = useState(getIsHost);
    // checked ? switchComponent =  : switchComponent = <Switch colorScheme="teal" size="lg" mx='5' onChange = {()=>{
    //     setChecked(!checked);
    //     setDashboard(!checked);
    // }}/>

    const logoutFn = useLogoutFunction()
        return (

            <Flex as="nav" align="center" h="90" justify="space-between" padding="1.5rem" bg="white" boxShadow="md">
                <Wrap>
                    <WrapItem>
                        <Center w='180px' h='80px'>
                            <Box>
                                <Image objectFit={"contain"} src={logo} alt='logo'/>
                            </Box>
                        </Center>
                    </WrapItem>
                </Wrap>

                <Flex align="center">
                    <Flex mx='10'>
                        <Text as='b'>Customer</Text>
                        <Switch colorScheme="teal" size="lg" mx='5' onChange = {()=>{
                            setChecked(!checked);
                            setDashboard(!checked);
                        }}/>
                        <Text as='b'>Host</Text>
                    </Flex>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon/>}
                            variant='outline'
                            size="lg"
                        />
                        <MenuList>
                            <menuGroup title="Profile">
                                <Link to="/profile"><MenuItem>My Profile</MenuItem></Link>
                                <Link to="/payments"><MenuItem>Payment Methods</MenuItem></Link>
                                <Link to="/dashboard"><MenuItem>Parking History</MenuItem></Link>
                                <Link to="/history"><MenuItem>Transaction History</MenuItem></Link>
                            </menuGroup>
                            <MenuDivider/>
                            <MenuItem onClick={() => {
                                logoutFn(false)
                                    .then(r => change(<LandingPage change={change}/>))
                            }}>Log Out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        );
})

export default NavBar;