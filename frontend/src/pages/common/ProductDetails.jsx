import React, { useEffect, useState, useTransition } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../redux/stores/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import ImageSlide from '../../components/layout/ImageSlide';
import RelatedProducts from '../../components/layout/RelatedProducts';
import ProductsReviews from '../../components/layout/ProductsReviews';
import ProductsDetails from '../../components/layout/ProductsDetails';
import RatingStar from '../../components/core/RatingStar';
import { FaPlus, FaMinus } from "react-icons/fa6";
import TabButton from '../../components/layout/TabButton';
import { increaseProducts, decreaseProducts, addToCartProducts } from '../../redux/stores/cartsSlice';


const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  const product = useSelector(state => state.products.productDetails);
  const status = useSelector(state => state.products.status);
  // const error = useSelector(state => state.products.error);
  const cart = useSelector(state => state.cart);
  const data = product?.productDetails;
  const productData = cart.find(item => item.id === data._id);

  useEffect(() => {
    dispatch(fetchProductDetails(productId.id));
  }, [dispatch, productId.id]);


  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState('about');
  console.log("useTransition",isPending)
  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab)
    })
  }

  const increaseQuantity = (id) => {
    dispatch(increaseProducts(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decreaseProducts(id));
  };

  const addToCartPro = (product) => {
    dispatch(addToCartProducts(product));
  }

  if (status === 'loading') {
    return <Loader />;
  }
  if (status === 'failed') {
    return <Error />;
  }
  return (
    <>
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
                  <div className='flex flex-row border border-slate-500 p-2 space-x-4 w-fit rounded-md items-center'>
                    <div onClick={() => { decreaseQuantity(data?._id) }} className='cursor-pointer'>
                      <FaMinus />
                    </div>
                    <p className='font-Kanit font-light text-lg'>{productData ? productData?.quantity : 0}</p>
                    <div onClick={() => { increaseQuantity(data?._id) }} className='cursor-pointer'>
                      <FaPlus />
                    </div>
                  </div>
                  <p
                    onClick={() => addToCartPro({ id: data._id, data: data })}
                    className='bg-slate-900 text-slate-50 p-3 rounded-md font-bold font-Kanit cursor-pointer'>Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review and related componets  */}

      <hr />
      <div className='flex justify-center items-center'>
        <div className='flex flex-row justify-between w-2/3 border-b border-color1'>
          {/* Button */}
          <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
            About
          </TabButton>
          <TabButton isActive={tab === "relatedP"} onClick={() => selectTab("relatedP")}>
            Related Products
          </TabButton>
          <TabButton isActive={tab === "review"} onClick={() => selectTab("review")}>
            Review
          </TabButton>
        </div>
        {/* Content */}
      </div>
      <div>
        {tab === "about" && <ProductsDetails data={data} />}
        {tab === "relatedP" && <RelatedProducts />}
        {tab === "review" && <ProductsReviews />}
      </div>
    </>

  );
};

export default ProductDetails;
