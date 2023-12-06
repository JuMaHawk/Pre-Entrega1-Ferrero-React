import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <div>

      <Flex bg="green.300"  h="5rem"  color="white">
        <Box p='4'>
          <h1>Hawkez Bicicleteria</h1>
        </Box>
        <Spacer />
        <Menu>
  <MenuButton>
    Categorias 
  </MenuButton>
  <MenuList bg="green.300">
    <MenuItem bg="black">Categoria 1</MenuItem>
    <MenuItem bg="black">Categoria 2</MenuItem>
      </MenuList>
</Menu>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>
    </div>
  )
}

export default Navbar
