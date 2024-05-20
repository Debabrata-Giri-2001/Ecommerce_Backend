import React from 'react'
import Header from '../../components/layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseProducts, increaseProducts } from '../../redux/stores/cartsSlice';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const Carts = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    const increaseQuantity = (id) => {
        dispatch(increaseProducts(id));
    };

    const decreaseQuantity = (id) => {
        dispatch(decreaseProducts(id));
    };

    console.log("cart--<", cart)

    return (
        <>
            <Header />
            <div className='py-2 px-3'>
                <div className="p-10">
                    <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

                        <div className="flex flex-col md:flex-row md:space-x-6">
                            {/* <!-- Product List --> */}
                            <div className="w-full md:w-3/4">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between py-2 border-b">
                                        <span className="font-semibold text-gray-600">Product</span>
                                        <span className="font-semibold text-gray-600">Quantity</span>
                                        <span className="font-semibold text-gray-600">Price</span>
                                    </div>

                                    {/* <!-- Product Item --> */}
                                    {cart?.map(i => (
                                        <div className="flex items-center justify-between py-2 border-b">
                                            <div className="flex items-center">
                                                <img src={i?.data?.images} alt="product_image" className="w-12 h-12 mr-4" />
                                                <div>
                                                    <p className="font-semibold">{i?.data?.title}</p>
                                                    <p className="text-sm text-gray-500">Brand: {i?.data?.brand}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className='flex flex-row border border-slate-500 p-2 space-x-4 w-fit rounded-md items-center'>
                                                    <div onClick={() => { decreaseQuantity(i?.id) }} className='cursor-pointer'>
                                                        <FaMinus />
                                                    </div>
                                                    <p className='font-Kanit font-light text-lg'>{i ? i?.quantity : 0}</p>
                                                    <div onClick={() => { increaseQuantity(i?.id) }} className='cursor-pointer'>
                                                        <FaPlus />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="font-semibold">${i?.quantity * i?.data?.selling_price}</span>
                                                <div className="text-red-500">
                                                    <MdDeleteOutline size={22} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* <!-- Repeat similar blocks for other products --> */}

                                </div>
                            </div>

                            {/* <!-- Sidebar --> */}
                            <div className="w-full md:w-1/4 mt-6 md:mt-0">
                                {/* <!-- Coupon Code --> */}
                                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                                    <h2 className="font-semibold mb-2">Coupon Code</h2>
                                    <input type="text" placeholder="Enter Your Coupon Code" className="w-full p-2 border rounded-md mb-2" />
                                    <button className="w-full py-2 text-white bg-blue-500 rounded-md">Apply Your Coupon</button>
                                </div>

                                {/* <!-- Order Summary --> */}
                                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                                    <h2 className="font-semibold mb-2">Order Summary</h2>
                                    <div className="flex justify-between py-1">
                                        <span>Discount</span>
                                        <span>$00.00</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span>Delivery</span>
                                        <span>$29.99</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span>Tax</span>
                                        <span>$39.99</span>
                                    </div>
                                    <div className="flex justify-between py-1 font-semibold">
                                        <span>Total</span>
                                        <span>$1879.93</span>
                                    </div>
                                </div>

                                {/* <!-- Payment Method --> */}
                                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                                    <h2 className="font-semibold mb-2">Payment Method</h2>
                                    <div className="flex space-x-4 mb-4">
                                        <button className="w-10 h-10 bg-blue-600 rounded-md"></button>
                                        <button className="w-10 h-10 bg-gray-400 rounded-md"></button>
                                        <button className="w-10 h-10 bg-red-500 rounded-md"></button>
                                        <button className="w-10 h-10 bg-yellow-500 rounded-md"></button>
                                    </div>
                                    <button className="w-full py-2 text-white bg-blue-500 rounded-md">Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carts
