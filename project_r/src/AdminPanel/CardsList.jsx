import React, { useState, useEffect } from 'react';
import "./CardsList.css";

const CardsList = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    fetch(`http://localhost:4000/product/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(products.filter((product) => product._id !== id));
        } else {
          console.error('Failed to delete the product');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  useEffect(() => {
    fetch('http://localhost:4000/product/list')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div className='cardlist'>
      <h1 style={{ color: 'white', textAlign: 'left' }}>Product List</h1>
      {products.length > 0 ? (
        <table className='cardtable' border='1' style={{ borderColor: 'blue' }}>
          <thead>
            <tr style={{ color: 'white', textAlign: 'center' }}>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={{ color: 'white', textAlign: 'center' }}>
                <td>{product._id}</td>
                <td>{product.productname}</td>
                <td>{product.productprice}</td>
                <td>
                  <img src={`http://localhost:4000/${product.productimage[0]}`} alt={product.productname} width="50" />
                </td>
                <td>
                  <input
                    className='delete'
                    type='button'
                    value='Delete'
                    onClick={() => deleteProduct(product._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: 'white' }}>No products found.</p>
      )}
    </div>
  );
};

export default CardsList;
