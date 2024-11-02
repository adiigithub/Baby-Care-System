const express = require('express');

require('../db/conn')
const Product = require('../models/products');

// Create a new product (POST)
const addProducts=async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  try {
    const product = new Product({ name, description, price, category, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all products (GET)
const getProduct=async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a specific product by ID (GET)
const getProductByID= async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product by ID (PUT)
const updateProduct= async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, stock } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category, stock },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product by ID (DELETE)
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getProduct,
  addProducts,
  getProductByID,
  updateProduct,
  deleteProduct
};
