import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

const __dirname = path.resolve();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));

//  Middleware for JSON parsing
app.use(express.json()); 

//  Routes
app.use('/api/products', productRoutes);

// Merging the frontend build folder with the backend
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

//  Database Connection & Server Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Database connection failed:", err);
});