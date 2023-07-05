import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";
import orderModel from "../models/orderModel.js";
import fs from "fs";
import slugify from "slugify";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();


export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    // Validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1mb" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};


export const deleteProductController = async (req, res) => {
  try {
    const { pid } = req.params;

    // Delete the product with the given pid
    await productModel.findByIdAndDelete(pid);

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error deleting product" });
  }
};


export const getProductController = async (req, res) => {
  try {
    // Retrieve all products
    const products = await productModel.find();

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving products" });
  }
};


export const getSingleProductController = async (req, res) => {
  try {
    const { slug } = req.params;

    // Find a single product based on the slug
    const product = await productModel.findOne({ slug });

    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving product" });
  }
};


export const productCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    // Find products based on the category slug
    const products = await productModel.find({ category: slug });

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving products" });
  }
};

export const productCountController = async (req, res) => {
  try {
    // Count the number of products
    const count = await productModel.countDocuments();

    res.json({ success: true, count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error counting products" });
  }
};


export const productFiltersController = async (req, res) => {
  try {
    // Retrieve filters from the request
    const { filters } = req.body;

    // Apply filters to the product query
    const products = await productModel.find(filters);

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error applying filters" });
  }
};

export const realtedProductController = async (req, res) => {
  try {
    const { pid, cid } = req.params;

    // Find related products based on the product id and category id
    const products = await productModel.find({ _id: { $ne: pid }, category: cid }).limit(4);

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving related products" });
  }
};

export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;

    // Find products matching the keyword
    const products = await productModel.find({ $text: { $search: keyword } });

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error searching products" });
  }
};

export const productPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;

    // Find the product by id
    const product = await productModel.findById(pid);

    if (!product || !product.photo.data) {
      return res.status(404).json({ success: false, error: "Product photo not found" });
    }

    res.set("Content-Type", product.photo.contentType);
    res.send(product.photo.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving product photo" });
  }
};

export const productListController = async (req, res) => {
  try {
    const { page } = req.params;
    const perPage = 10; // Number of products per page

    // Calculate the skip value based on the page number and perPage value
    const skip = (page - 1) * perPage;

    // Retrieve products with pagination
    const products = await productModel.find().skip(skip).limit(perPage);

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error retrieving products" });
  }
};


export const updateProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    const { name, description, price, category, quantity, shipping } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !price:
        return res.status(500).send({ error: "Price is required" });
      case !category:
        return res.status(500).send({ error: "Category is required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is required" });
      case photo && photo.size > 1000000:
        return res.status(500).send({ error: "Photo is required and should be less than 1mb" });
    }

    const product = await productModel.findById(pid);

    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    // Update the product fields
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.quantity = quantity;
    product.shipping = shipping;
    product.slug = slugify(name);

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();

    res.status(200).send({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating product",
    });
  }
};