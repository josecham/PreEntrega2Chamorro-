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

const NavBar = () => {
  return (
        <>
        <div className='header'>
        <Flex>
    
    <Box p='4'>
    
    <h3>Dc - Comics</h3>
    
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
    <CartWidget/>
    </Box>
    </Flex>
         
          
    </div>
        
        </>
      )
    }
    
    export default NavBar