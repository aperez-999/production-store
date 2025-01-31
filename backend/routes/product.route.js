import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Get method ( get all products )
router.get('/', getProducts);
// Create product
router.post('/', createProduct);
// Update endpoint (PUT)
router.put('/:id', updateProduct);
// Delete endpoint
router.delete('/:id', deleteProduct);

export default router;