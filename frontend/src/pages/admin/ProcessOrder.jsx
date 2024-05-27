import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleHeader from '../../components/layout/TitleHeader';
import Loader from '../../components/core/Loader';
import { MdOutlineAccountTree } from "react-icons/md";
import SideBar from './SideBar';

const ProcessOrder = () => {
  const [status, setStatus] = useState('');

  const order = {
    loading: false,
    orderStatus: 'Processing',
    user: { name: 'John Doe' },
    shippingInfo: {
      phoneNo: '1234567890',
      address: '123 Main St',
      city: 'City',
      state: 'State',
      pinCode: '12345',
      country: 'Country',
    },
    paymentInfo: { status: 'succeeded' },
    totalPrice: 500,
    orderItems: [
      {
        product: '1',
        image: 'product-image.jpg',
        name: 'Product Name',
        quantity: 2,
        price: 250,
      },
      // Add more order items as needed
    ],
  };

  const updateOrderSubmitHandler = (e) => {
    // Implement update order logic here
  };

  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full'>
          <TitleHeader title="Process Order" />
          <div className="p-4">
            {false ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Shipping Info</h2>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Name:</p>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone:</p>
                      <span>{order.shippingInfo && order.shippingInfo.phoneNo}</span>
                    </div>
                    <div>
                      <p className="font-semibold">Address:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <p className=''>Payment</p>
                  <div className="space-y-2">
                    <div>
                      <p className={order.paymentInfo && order.paymentInfo.status === 'succeeded' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {order.paymentInfo && order.paymentInfo.status === 'succeeded' ? 'PAID' : 'NOT PAID'}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Amount:</p>
                      <span>{order.totalPrice && order.totalPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <p className='font-Kanit text-lg'>Order Status</p>
                  <p className={order.orderStatus && order.orderStatus === 'Delivered' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg col-span-2">
                  <p className='font-Kanit text-lg'>Your Cart Items</p>
                  <div className="space-y-2">
                    {order.orderItems &&
                      order.orderItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <img src={item.image} alt="" className="w-16 h-16 mr-4" />
                          <div>
                            <Link to={`/product/${item.product}`} className="text-blue-600 font-semibold">{item.name}</Link>
                            <p>
                              {item.quantity} X ₹{item.price} ={' '}
                              <b>₹{item.price * item.quantity}</b>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                {order.orderStatus !== 'Delivered' && (
                  <div className="border border-gray-200 p-4 rounded-lg col-span-2">
                    <form className="updateOrderForm" onSubmit={updateOrderSubmitHandler}>
                      <p className='font-Kanit text-lg'>Process Order</p>
                      <div className="relative mt-4 w-fit">
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          className="px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Choose Status</option>
                          {order.orderStatus === 'Processing' && <option value="Shipped">Shipped</option>}
                          {order.orderStatus === 'Shipped' && <option value="Delivered">Delivered</option>}
                        </select>
                        {/* <MdOutlineAccountTree className="absolute top-1/2 right-3 transform -translate-y-1/2" /> */}
                      </div>
                      <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        disabled={order.loading || status === ''}
                      >
                        Process
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>


    </Fragment>
  );
};

export default ProcessOrder;
