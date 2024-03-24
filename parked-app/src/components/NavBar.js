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
    IconButton, Center,
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react'
import logo from '../assets/logo.png';
const NavBar = () => {
    return (

        <Flex as="nav" align="center" h = "90" justify="space-between" padding="1.5rem" bg="white" boxShadow="md">
            <Wrap>
                <WrapItem>
                    <Center w='180px' h='80px'>
                    <Box>
                        <Image objectFit={"contain"} src={logo} alt='logo' />
                    </Box>
                    </Center>
                </WrapItem>
            </Wrap>

            <Flex align="center">
                <Flex mx = '10'>
                    <Text as = 'b'>Customer</Text>
                    <Switch colorScheme="teal" size="lg" mx = '5'/>
                    <Text as = 'b'>Host</Text>
                </Flex>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        size = "lg"
                    />
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>

    );
};

export default NavBar;