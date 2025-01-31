import {
  Box,
  Button,
  Center,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const NoProducts = () => {
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Center flexDirection="column" mt={10} textAlign="center">
        <Icon as={FiShoppingBag} boxSize={20} color="gray.400" />
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("gray.600", "gray.400")} mt={4}>
          No Products Available
        </Text>
        <Text fontSize="md" color="gray.500" maxW="md">
          Start adding products to build your online store and showcase your items to customers.
        </Text>
        <Link to="/create">
          <Button mt={6} colorScheme="blue" size="lg" _hover={{ transform: "scale(1.05)", transition: "0.2s" }}>
            ➕ Add Your First Product
          </Button>
        </Link>
        <Box mt={8} textAlign="center">
          <Text fontSize="sm" color="gray.500">
            Need help? Check out our{" "}
            <Link to="/getting-started">
              <Box as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                Getting Started Guide.
              </Box>
            </Link>
          </Text>
        </Box>
      </Center>
    </MotionBox>
  );
};

export default NoProducts;