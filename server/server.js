import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import JWT from "jsonwebtoken";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";
const app = express();
<<<<<<< HEAD

=======
// Enable CORS with specific origin
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
>>>>>>> 03e456baaf4921efc79d93f01356a20e86d66592
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

connectDB();

app.use(express.json());
app.use(morgan("dev"));

// Enable CORS with specific origin
<<<<<<< HEAD
app.use(cors());
Header('Access-Control-Allow-Origin', 'http://localhost:3000');
Header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
Header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
=======
>>>>>>> 03e456baaf4921efc79d93f01356a20e86d66592

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

<<<<<<< HEAD
app.get("/", (req, res) => {
=======

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use('/api/v1/payment', paymentRoutes);

app.get('/', (req, res) => {
>>>>>>> 03e456baaf4921efc79d93f01356a20e86d66592
  res.send("<h1>Hellooo</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} in ${process.env.DEV_MODE}`);
});
