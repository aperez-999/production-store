import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ProductInspirationPage = () => {
  const sectionBg = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");

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
            Product Inspiration Guide
          </Heading>
          <Text fontSize="lg" color={textColor} textAlign="center" mt={2}>
            Need ideas on what to sell? Here are some trending product categories to consider.
          </Text>
        </MotionBox>

        {/* Placeholder for Image/Video */}
        <Box display="flex" justifyContent="center" w="full">
          <Image
            src="/images/productSet.webp"  
            alt="Product Inspiration Guide"
            w="50%"
            maxW="600px"  
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>

        {/* Trending Product Ideas */}
        <Box w="full" p={6} bg={sectionBg} borderRadius="lg" shadow="lg">
          <Heading size="md" color="blue.500" mb={4}>
            Popular Product Categories
          </Heading>
          <Text color={textColor}>• **Tech Gadgets** – Wireless chargers, smart home devices, portable speakers.</Text>
          <Text color={textColor}>• **Fashion & Apparel** – Custom T-shirts, sneakers, jewelry.</Text>
          <Text color={textColor}>• **Digital Products** – E-books, templates, online courses.</Text>
          <Text color={textColor}>• **Health & Wellness** – Supplements, fitness gear, skincare products.</Text>
          <Divider my={4} borderColor="gray.400" />

          <Heading size="md" color="blue.500" mb={4}>
            Best Practices for Listing Products
          </Heading>
          <Text color={textColor}>
            • Use **high-quality images** to showcase products effectively.  
            • Write **clear and engaging descriptions** that highlight product benefits.  
            • Ensure pricing is **competitive and transparent**.  
            • Organize products into **categories** for better navigation.  
          </Text>
        </Box>

        {/* Call-to-Action */}
        <Link to="/create">
          <Button colorScheme="blue" size="lg" mt={4}>
            Start Adding a Product
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default ProductInspirationPage;