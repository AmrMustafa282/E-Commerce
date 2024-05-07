import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Product from "./productModel.js";
import { DATA } from "./data.js";
dotenv.config();

mongoose
 .connect(process.env.DATABASE)
 .then(() => console.log("MongoDB is connected"))
 .catch((err) => console.log(err));

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/api/products", async (req, res, next) => {
 try {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
   status: "success",
   newProduct,
  });
 } catch (error) {
  next(error);
 }
});

app.get("/api/products", async (req, res, next) => {
 try {
  const products = await Product.find();
  res.status(201).json({
   status: "success",
   products,
  });
 } catch (error) {
  next(error);
 }
});
app.get("/api/products/:id", async (req, res, next) => {
 try {
  const { id: _id } = req.params;
  const product = await Product.find({ _id });
  res.status(201).json({
   status: "success",
   product,
  });
 } catch (error) {
  next(error);
 }
});

app.listen(port, () => {
 console.log(`Server is running on port:${port}`);
});

app.use((err, req, res, next) => {
 const statusCode = err.statusCode || 500;
 const message = err.message || "Internal Server Error";
 res.status(statusCode).json({
  status: "failed",
  statusCode,
  message,
 });
});

const importData = async () => {
 DATA.forEach(async (item) => {
  await Product.create(item);
 });
 console.log("data has been imoprted");
};

const deleteData = async () => {
 await Product.deleteMany();
 console.log("data has been deleted");
};

if (process.argv[2] === "--import") {
 importData();
} else if (process.argv[2] === "--delete") {
 deleteData();
}
