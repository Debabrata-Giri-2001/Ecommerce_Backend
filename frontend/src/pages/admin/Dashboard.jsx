import React from 'react'
import { Link } from "react-router-dom";
import SideBar from './SideBar';
import Chart from 'react-apexcharts'
// import { useSelector, useDispatch } from "react-redux";


const Dashboard = () => {

  var state = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  }


  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };


  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <SideBar />
      <div className='w-full py-2 px-2'>
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
          
          <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4'>

          </div>
        </div>

        <div className='flex flex-row'>
          <div className='w-[50%] mx-2 bg-slate-50 shadow-md'>

            <Chart options={state.options} series={state.series} type="bar" width={500} height={380} />
          </div>
          <div className='w-[50%] mx-2 bg-slate-50 shadow-md'>
            <Chart options={options} series={options.series} type="pie" width={500} height={380} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
