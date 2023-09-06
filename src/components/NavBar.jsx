import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <>
        <div className='header'>
        <Flex>
    
    <Box p='4'>
    <Link to = {"/"}>
    <h3>Dc - Comics</h3>
    </Link>
    </Box>
    
    <Spacer />
    
    <Box p='4'>
    
      <Menu>
      <MenuButton className="button">
        Categories
      </MenuButton>
      <MenuList>
        <MenuItem>Liga de la Justicia</MenuItem>
        <MenuItem>Batman</MenuItem>
        <MenuItem>The Flash</MenuItem>
      </MenuList>
    </Menu>
    </Box>
    <Spacer />
    <Box p='4'>
<Link to = {"/cart"}>
    <CartWidget/>
    </Link>
    </Box>
    </Flex>
         
          
    </div>
        
        </>
      )
    }
    
    export default NavBar