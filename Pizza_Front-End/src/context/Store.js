import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('/api/product');
        const productsData = response.data.result;
        setProducts(productsData);
        setLoading(false); // Set loading to false when data is available
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;