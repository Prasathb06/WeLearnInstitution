import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { IoMdStarHalf } from 'react-icons/io';
import { MdStarRate } from 'react-icons/md';
import "./Cards.css"; // Assuming you have a CSS file for styling

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/product/list');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (productName) => {
    alert(`Good Job! You are Selected ${productName} Course. Our Team will call You Quickly`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card key={product._id} className="product-card">
          <Card.Img
            variant="top"
            src={`http://localhost:4000/${product.productimage[0]}`}
            alt={product.productname}
          />
          <Card.Body>
            <Card.Title>{product.productname}</Card.Title>
            <Card.Text>
              <p className="discount">{product.productdiscount}% off</p>
              <p className="price-dis">
                <LiaRupeeSignSolid /> {product.productdis}
              </p>
              <p className="price-current">
                <LiaRupeeSignSolid /> {product.productprice}
              </p>
              <div style={{display:"flex"}}>
              <button onClick={() => handleBuyNow(product.productname)}>Buy Now</button>
                {/* <button>Add to Cart</button> */}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

