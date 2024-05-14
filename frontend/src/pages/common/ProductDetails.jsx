import React, { useEffect, useState, useTransition } from 'react';
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
import Header from '../../components/layout/Header';
import RatingStar from '../../components/core/RatingStar';


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


  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState('about');

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab)
    })
  }


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


  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  if (status === 'loading') {
    return <Loader />;
  }
  if (status === 'failed') {
    return <Error />;
  }
  return (
    <>
      <Header />
      <div className='px-2 py-4 flex flex-row justify-center'>

        <div className='w-[40%]'>
          <ImageSlide />
        </div>

        <div className='w-[50%]'>
          <div className="rounded overflow-hidden">
            <div className="px-6 py-4">
              <div className="text-2xl font-semibold font-Kanit mb-2">{data?.title}</div>
              <div className="flex flex-row items-center space-x-1">
                <RatingStar rating={data?.average_rating} size={18} />
                <span className="font-Kanit font-normal text-xl">({data?.average_rating})</span>
              </div>
              <p className="text-gray-700 font-Kanit text-3xl py-3 space-x-2">
                <span className="font-light">${data?.actual_price}</span>
                <span className='text-base'>({data?.discount})</span>
              </p>
              <hr />
              {/* cart option size */}
              <div className='py-2'>
                <p className='font-Kanit font-light text-md py-3'>Available Size</p>
                <div className='flex flex-row space-x-4'>
                  <p className='bg-slate-900 text-slate-50 p-3 rounded-md font-bold font-Kanit'>S</p>
                  <p className='bg-slate-900 text-slate-50 p-3 rounded-md font-bold font-Kanit'>M</p>
                  <p className='bg-slate-900 text-slate-50 p-3 rounded-md font-bold font-Kanit'>L</p>
                </div>
              </div>
              <hr className='my-3' />
              {/* cart quanty */}
              <div className='py-2'>
                <p className='font-Kanit font-light text-md py-3'>-Make it's Your</p>
                <div className='flex flex-row space-x-3'>
                  <div className='flex flex-row border border-slate-500 p-2 space-x-4 w-fit rounded-md'>
                    <p className='font-Kanit font-bold text-lg'>➖</p>
                    <p className='font-Kanit font-light text-lg'>{1}</p>
                    <p className='font-Kanit font-bold text-lg'>➕</p>
                  </div>
                  <p className='bg-slate-900 text-slate-50 p-3 rounded-md font-bold font-Kanit cursor-pointer'>Add to cart</p>
                </div>
              </div>
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
      </div>
    </>

  );
};

export default ProductDetails;
