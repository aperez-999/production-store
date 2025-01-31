import {
  Container,
  SimpleGrid,
  Text,
  VStack,
  Input,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import NoProducts from "../components/NoProducts";

const MotionBox = motion.create(Box);

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inputBg = useColorModeValue("gray.100", "gray.700");
  const inputBorder = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("black", "white");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8} w="full">
        {/* Header */}
        <MotionBox initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" bgGradient="linear(to-r, teal.400, blue.500)" bgClip="text">
            Explore Our Latest Products
          </Text>
        </MotionBox>

        {/* Search Bar (Only Visible When Products Exist) */}
        {products.length > 0 && (
          <Input
            placeholder="Search for a product..."
            size="lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            focusBorderColor="blue.400"
            bg={inputBg}
            borderColor={inputBorder}
            color={textColor}
            _placeholder={{ color: placeholderColor }}
            _focus={{ bg: inputBg, shadow: "lg", borderColor: "blue.400" }}
            borderRadius="lg"
            w="50%"
            textAlign="center"
          />
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <NoProducts />
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;