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
// Enable CORS with specific origin
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
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

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hellooo</h1>");
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} in ${process.env.DEV_MODE}`);
});

// Set the server timeout (e.g., 30 seconds)
server.timeout = 20000;
