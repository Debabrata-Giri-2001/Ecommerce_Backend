import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/stores/ProductsSlice';
import Loader from '../core/Loader';
import Error from '../core/Error';
import ProductCard from './ProductCard';

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
    <div className='mx-14 '>
      <h1 className='font-bold text-2xl text-slate-500'>Products</h1>
      <div className="flex flex-wrap justify-between my-4">
        {products.map(product => (
          <Link to={`/product/${product?._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
