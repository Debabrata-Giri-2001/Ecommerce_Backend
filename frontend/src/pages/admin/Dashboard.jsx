import React from 'react'
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// import { useSelector, useDispatch } from "react-redux";


const Dashboard = () => {



  const lineState = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const doughnutState = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <p className="text-xl font-semibold text-gray-700">
            Total Amount <br /> 
            <span className="text-3xl text-green-500 font-bold">₹{1200}</span>
          </p>
          <img className='h-12 w-12' src="https://cdn-icons-png.flaticon.com/512/9752/9752284.png" alt="order_icon" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <Link to="/admin/products" className="hover:bg-gray-200 p-4 rounded-lg">
            <p className="text-xl font-semibold text-gray-700">Products</p>
            <p>{1200}</p>
          </Link>
          <Link to="/admin/orders" className="hover:bg-gray-200 p-4 rounded-lg">
            <p className="text-xl font-semibold text-gray-700">Orders</p>
            <p>{1230}</p>
          </Link>
          <Link to="/admin/users" className="hover:bg-gray-200 p-4 rounded-lg">
            <p className="text-xl font-semibold text-gray-700">Users</p>
            <p>{12}</p>
          </Link>
        </div>
      </div>

      <div className='flex flex-row '>
      <div className="w-1/2 h-1/3 bg-white p-2 rounded-lg shadow-lg mx-2">
        <Line data={lineState} />
      </div>

      <div className="w-1/2 1/3 bg-white p-2 rounded-lg shadow-lg mx-2">
        <Doughnut style={{height:'50%',width:'50%'}} data={doughnutState} />
      </div>
      </div>
    </div>
  )
}

export default Dashboard
