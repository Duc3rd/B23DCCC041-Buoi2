import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
    { id: 7, name: 'Product 7', price: 700 },
    { id: 8, name: 'Product 8', price: 800 },
    // Thêm sản phẩm khác vào đây
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const renderProducts = currentItems.map((product) => (
    <div key={product.id} className="product-item">
      <span>{product.name} - {product.price} VND</span>
      <button className="btn delete-btn">Xóa</button>
      <Link to={`/edit-product/${product.id}`} className="btn edit-btn">Chỉnh sửa</Link>
    </div>
  ));

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="product-list">
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm hàng hóa..." />
        <Link to="/add-product" className="btn add-btn">Thêm H
