import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tên hàng hóa:', name);
    console.log('Giá hàng hóa:', price);
    // Thêm logic để gửi dữ liệu đến server hoặc lưu trữ tại đây
    setName('');
    setPrice('');
  };

  return (
    <div className="add-product">
      <h1>Thêm Hàng Hóa</h1>
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
          id="product-price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="btn add-btn">Thêm hàng hóa</button>
        <button type="button" className="btn back-btn" onClick={() => window.history.back()}>Quay Lại</button>
      </form>
    </div>
  );
};

export default AddProduct;
