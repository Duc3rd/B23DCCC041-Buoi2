import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Fetch data from server based on product ID
    // Sample data for demonstration
    const fetchData = async () => {
      const product = { name: 'Sample Product', price: 100 };
      setName(product.name);
      setPrice(product.price);
    };
    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tên hàng hóa:', name);
    console.log('Giá hàng hóa:', price);
    // Thêm logic để gửi dữ liệu đến server hoặc lưu trữ tại đây
  };

  return (
    <div className="edit-product">
      <h1>Chỉnh Sửa Hàng Hóa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Tên hàng hóa</label>
        <input
          type="text"
          id="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="product-price">Giá hàng hóa</label>
        <input
          type="number"
          id="product-price
