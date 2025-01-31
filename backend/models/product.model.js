import mongoose from "mongoose";


// A schema in NOSQL is a blueprint for the data so think of it as a table for information about a product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true // createdAt, updatedAt 
});

const Product = mongoose.model("Product", productSchema);

export default Product;