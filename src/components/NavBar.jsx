import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

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
    <Link to = {"/"}>
    <h3>Dc - Comics</h3>
    </Link>
    </Box>
    
    <Spacer />
    
    <Box p='4'>
    

      <Menu>
      <MenuButton className="button boton" >
        Categories
      </MenuButton>
      <MenuList >
        <MenuItem >
        <Link to = {`/categoria/${"Batman"}`}> 
       Batman
        </Link>
        </MenuItem>
        <MenuItem >
        <Link to = {`/categoria/${"The Flash"}`}>
        The Flash
        </Link>
        </MenuItem>
        <MenuItem >
        <Link to = {`/categoria/${"Justice League"}`}>
        Justice League
        </Link>
        </MenuItem>
       
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