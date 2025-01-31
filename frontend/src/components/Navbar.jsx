import React from 'react';
import {
  Container,
  HStack,
  Text,
  Button,
  Flex,
  useColorMode,
  IconButton,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';


const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <Box
        as="nav"
        position="sticky"
        top={0}
        zIndex={10}
        bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
        backdropFilter="blur(10px)"
        boxShadow={useColorModeValue("md", "dark-lg")}
        py={3}
      >
        <Container maxW="1200px" px={4}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            
            {/* Logo */}
            <Text
              fontSize={{ base: "20px", sm: "26px" }}
              fontWeight="bold"
              textAlign="center"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
              transition="color 0.3s ease-in-out"
              _hover={{ textDecoration: "underline" }}
            >
              <Link to="/">PerezDev | Production Store</Link>
            </Text>

            {/* Buttons */}
            <HStack spacing={3}>
              {/* Add Product Button */}
              <Link to="/create">
                <IconButton
                  aria-label="Add Product"
                  icon={<PlusSquareIcon />}
                  size="md"
                  colorScheme="blue"
                  variant="ghost"
                  transition="all 0.3s"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Link>

              {/* Theme Toggle Button */}
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <IoMoon /> : <IoSunnyOutline />}
                size="md"
                onClick={toggleColorMode}
                transition="all 0.3s"
                _hover={{ transform: "scale(1.1)" }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Navbar;