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
    Button, IconButton, Center,
} from '@chakra-ui/react';
import {ChevronDownIcon, HamburgerIcon} from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react'
import logo from '../assets/logo.png';
const NavBar = () => {
    return (
        // <Navbar bg="white" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="#home">parked</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Form inline>
        //                     <Form.Label>
        //                         Customer
        //                         <Switch size="lg" />
        //                         Host
        //                     </Form.Label>
        //                 </Form>
        //                 <Nav.Link href="#profile">Profile</Nav.Link>
        //                 <NavDropdown title="Menu" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <Flex as="nav" align="center" h = "90" justify="space-between" padding="1.5rem" bg="white" boxShadow="md">
            {/* Title */}
            <Wrap>
                <WrapItem>
                    <Center w='180px' h='80px'>
                    <Box>
                        <Image objectFit={"contain"} src={logo} alt='logo' />
                    </Box>
                    </Center>
                </WrapItem>
            </Wrap>

            {/* Right-aligned elements */}
            <Flex align="center">
                {/* Switch */}
                {/*<Form inline>*/}
                {/*    <Form.Label>*/}
                {/*    Customer*/}
                <Flex mx = '10'>
                    <Text as = 'b'>Customer</Text>
                    <Switch colorScheme="teal" size="lg" mx = '5'/>
                    <Text as = 'b'>Host</Text>
                </Flex>
                {/*Host*/}
                {/*</Form.Label>*/}
                {/*</Form>*/}

                {/* Dropdown Menu */}
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