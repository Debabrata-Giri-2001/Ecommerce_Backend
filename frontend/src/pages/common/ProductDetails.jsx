import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../redux/stores/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';

const ProductDetails = (props) => {
  let params = useParams();
  let productId = params.id;


  const dispatch = useDispatch();
  const { productDetails } = useSelector(state => state.products.productDetails);
  const status = useSelector(state => state.products.status);
  // const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

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
      <h1>Product Details</h1>
      {productDetails && (
        <div>
          <h2>{productDetails?.name}</h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
