// file that has all controller functions for product
import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
      const products = await Product.find({}); // find all products
      res.status(200).json(products); // send the products as a response
  } catch (error) {
      console.error("Error in fetching products:", error.message);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
   }
}

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data in the request body

  //Error handling - if any of the fields are missing
  if(!product.name || !product.price || !product.image) {
      return res.status(400).json({ sucess: false, message: 'Please fill all the fields' });
  }

  // if all the fields are present, create a new product

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct});
  } catch (error) {
    console.error("Error in creating product:", error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

export const updateProduct = async (req, res) => {
  const {id} = req.params; // get the id from the request params (:id)
  const product = req.body; // get the updated product data from the request body
  // Check if Id is valid
  if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid Product ID' });
  }
  
  try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true}); // find the product by id and update it
      res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

export const deleteProduct = async (req, res) => {
  const {id} = req.params; // get the id from the request params (:id)
  
  try {
      await Product.findByIdAndDelete(id); // find the product by id and delete it
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
      console.error("Error in deleting product:", error.message);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}