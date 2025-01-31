import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion.create(Box);

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  
  const inputBg = useColorModeValue("gray.100", "gray.700"); 
  const inputBorder = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("black", "white");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Container maxW="container.sm" py={10}>
      <VStack spacing={10}>
        {/* Animated Header */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h1" size="2xl" textAlign="center">
            Add a New Product
          </Heading>
        </MotionBox>

        {/* Modernized Form Card */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          w="full"
          bg={useColorModeValue("whiteAlpha.900", "gray.800")}
          p={10}
          rounded="2xl"
          shadow="2xl"
          backdropFilter="blur(10px)"
        >
          <VStack spacing={6}>
            <Input
              placeholder="Product Name"
              name="name"
              size="lg"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              focusBorderColor="blue.400"
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: placeholderColor }}
              _focus={{ bg: inputBg, shadow: "lg", borderColor: "blue.400" }}
              borderRadius="lg"
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              size="lg"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              focusBorderColor="blue.400"
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: placeholderColor }}
              _focus={{ bg: inputBg, shadow: "lg", borderColor: "blue.400" }}
              borderRadius="lg"
            />
            <Input
              placeholder="Image URL"
              name="image"
              size="lg"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              focusBorderColor="blue.400"
              bg={inputBg}
              borderColor={inputBorder}
              color={textColor}
              _placeholder={{ color: placeholderColor }}
              _focus={{ bg: inputBg, shadow: "lg", borderColor: "blue.400" }}
              borderRadius="lg"
            />

            <Button
              colorScheme="blue"
              size="lg"
              w="full"
              onClick={handleAddProduct}
              _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
              borderRadius="lg"
              shadow="lg"
            >
              Add Product
            </Button>
          </VStack>
        </MotionBox>

        {/* Extra Call-to-Action Section */}
        <Text fontSize="sm" color="gray.500" textAlign="center">
          Not sure what to add? Check out our{" "}
          <Link to="/product-inspiration">
          <Box as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
            product inspiration guide.
          </Box>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default CreatePage;