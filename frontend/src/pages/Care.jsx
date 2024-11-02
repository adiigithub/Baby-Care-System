import React, { useState, useEffect } from 'react';

const Care = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: ''
  });
  const [editProductId, setEditProductId] = useState(null);

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      setFormData({ name: '', description: '', price: '', category: '', stock: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Edit product details
  const handleEditProduct = (product) => {
    setFormData(product);
    setEditProductId(product._id);
  };

  // Update a product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/products/${editProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const updatedProduct = await response.json();
      const updatedProducts = products.map((prod) =>
        prod._id === editProductId ? updatedProduct : prod
      );
      setProducts(updatedProducts);
      setEditProductId(null);
      setFormData({ name: '', description: '', price: '', category: '', stock: '' });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Delete a product using fetch
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter((product) => product._id !== id));
      } else {
        console.error('Error deleting product:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product Management</h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
        onSubmit={editProductId ? handleUpdateProduct : handleAddProduct}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editProductId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <ul className="bg-white shadow-md rounded px-4 py-6">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <li key={product._id} className="mb-4 flex justify-between items-center">
              <div>
                <strong>{product.name}</strong> - {product.description} - ${product.price} - Stock: {product.stock}
              </div>
              {/* <div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </button>
              </div> */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Care;
