import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const GettingStartedPage = () => {
  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={8} align="start">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          w="full"
        >
          <Heading as="h1" size="2xl" textAlign="center">
            Getting Started with Your Store
          </Heading>
          <Text fontSize="lg" color="gray.500" textAlign="center" mt={2}>
            Learn how to set up and manage your products efficiently.
          </Text>
        </MotionBox>

        {/* Video Guide - Shortened iframe */}
        <Box w="full" borderRadius="lg" overflow="hidden">
          <video width="100%" height="280px" controls>
            <source src="/videos/Guide%20for%20Production%20Store.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* New Informational Section */}
        <Box
          w="full"
          p={6}
          bg={useColorModeValue("gray.100", "gray.800")}
          borderRadius="lg"
          shadow="lg"
          textAlign="left"
        >
          <Heading size="md" color="blue.500" mb={3}>
            How to Get Started
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            - **Step 1:** Navigate to the <Link to="/create"><Text as="span" color="blue.400">Create Product Page</Text></Link> and fill in the details.
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            - **Step 2:** Manage your products from the homepage by **editing or deleting them**.
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            - **Step 3:** Organize your store by adding product categories and improving descriptions.
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.300")}>
            - **Need ideas?** Visit our <Link to="/product-inspiration"><Text as="span" color="blue.400">Product Inspiration Guide</Text></Link>.
          </Text>
        </Box>

        {/* Call-to-Action */}
        <Link to="/">
          <Button colorScheme="blue" size="lg" mt={4}>
            Back to Home
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default GettingStartedPage;