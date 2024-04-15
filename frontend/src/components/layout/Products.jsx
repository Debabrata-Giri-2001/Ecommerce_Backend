import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/stores/ProductsSlice';
import Loader from '../core/Loader';
import Error from '../core/Error';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  // const error = useSelector(state => state.products.error);

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  // Render loading state
  if (status === 'loading') {
    return <Loader />;
  }

  // Render error state
  if (status === 'failed') {
    return <Error />;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <Link to={`/product/${product?._id}`}>
            <li key={product.id}>{product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;
