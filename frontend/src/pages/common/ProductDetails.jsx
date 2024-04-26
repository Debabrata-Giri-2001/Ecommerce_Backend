import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../redux/stores/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import ImageSlide from '../../components/layout/ImageSlide';
import { Rating } from 'react-simple-star-rating'
import StarRatings from 'react-star-ratings';
import RelatedProducts from '../../components/layout/RelatedProducts';
import ProductsReviews from '../../components/layout/ProductsReviews';


const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  const product = useSelector(state => state.products.productDetails);
  const status = useSelector(state => state.products.status);
  // const error = useSelector(state => state.products.error);

  const data = product?.productDetails;

  useEffect(() => {
    dispatch(fetchProductDetails(productId.id));
  }, [dispatch, productId.id]);


  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [openRev, setOpenRev] = useState(false);


  const ratingOptions = {
    size: 25,
    initialValue: data?.rating,

  };

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };


  const addToCartHandler = () => {
    // dispatch(addItemsToCart(match.params.id, quantity));

  };
  const changeRating = () => {

  }

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  if (status === 'loading') {
    return <Loader />;
  }
  if (status === 'failed') {
    return <Error />;
  }
  // console.log("==>", data)
  return (
    <>

      <div className='px-2 py-4 flex flex-row'>

        <div className='w-[50%]'>
          <ImageSlide />
        </div>

        <div className='w-[50%]'>
          <div className="">
            <div>
              <div className="space-y-2">
                <p className='font-Ubuntu font-bold text-4xl text-cyan-900'>{data?.name}</p>
                <p className='font-Ubuntu font-medium text-lg text-gray-400 underline'>Product #{data?._id}</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <StarRatings
                  rating={3}
                  starRatedColor="#f0a40c"
                  changeRating={changeRating}
                  numberOfStars={6}
                  starDimension={'25px'}
                  name='rating'
                />
                <p className="font-semibold">
                  ({data?.numOfReview} Reviews)
                </p>
              </div>
              <h1 className='font-bold font-Ubuntu text-3xl py-2 text-red-700'>{`₹${data?.price}`}</h1>
              <div className="flex items-center">
                <div className="flex items-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={quantity} className="mx-4 py-2 border-2 rounded-md focus:outline-none  text-center" />
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={increaseQuantity}>+</button>
                </div>
                <button
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  disabled={product?.stock < 1}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>

              <div className='flex flex-row space-x-3 text-xl py-2 '>
                <p className=''>
                  Status:
                </p>
                <p className={data?.stock < 1 ? "text-red-600" : "text-green-600"}>
                  {data?.stock < 1 ? "OutOfStock" : "InStock"}
                </p>
              </div>



              <div className="py-3">
                <p className='font-semibold text-xl text-slate-700'>Description : </p> <p className='text-slate-400 font-medium text-lg'>{data?.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* review and related componets  */}

      <div>
        {/* Button */}
        <div className='flex flex-row space-x-2 py-2 px-2'>
          <p
            onClick={() => setOpenRev(false)}
            className={`p-2 border-2 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105 ${!openRev
                ? 'border-orange-600 bg-orange-200'
                : 'border-gray-400 bg-white'
              }`}
          >
            Review's
          </p>
          <p
            onClick={() => setOpenRev(true)}
            className={`p-2 border-2 rounded-md shadow-md cursor-pointer  transform transition duration-300 hover:scale-105 ${openRev
                ? 'border-orange-600 bg-orange-200'
                : 'border-gray-400 bg-white'
              }`}
          >
            Related Product's
          </p>
        </div>
        <hr />
        {/* Content */}
        {openRev ? <ProductsReviews  /> : <RelatedProducts />}
      </div>
    </>

  );
};

export default ProductDetails;
