import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/stores/ProductsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  // Render loading state
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Render error state
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Ensure that products is an array before calling map
  if (!Array.isArray(products)) {
    return <div>No products found</div>;
  }

  console.log("data==>",products)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
