import React, { Fragment, useState } from 'react'
import TitleHeader from '../../components/layout/TitleHeader'
import { FaSpellCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdAccountTree } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import SideBar from './SideBar';


const NewProduct = () => {


  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const createProductSubmitHandler = () => {

  }

  const createProductImagesChange = () => {

  }

  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full'>
          <TitleHeader title="Create Product" />
          <div className="dashboard min-h-screen bg-gray-100 p-6 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
              <form
                className="createProductForm space-y-6"
                encType="multipart/form-data"
                onSubmit={createProductSubmitHandler}
              >
                <h1 className="text-2xl font-semibold text-gray-800">Create Product</h1>

                <div className="relative flex items-center">
                  <FaSpellCheck size={23} className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  />
                </div>

                <div className="relative flex items-center">
                  <MdAttachMoney size={23} className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="number"
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  />
                </div>

                <div className="relative flex items-start">
                  <MdDescription size={23} className="text-gray-500 absolute left-3 top-3" />
                  <textarea
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="3"
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  ></textarea>
                </div>

                <div className="relative flex items-center">
                  <MdAccountTree size={23} className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  >
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative flex items-center">
                  <GrStorage size={23} className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="number"
                    placeholder="Stock"
                    required
                    onChange={(e) => setStock(e.target.value)}
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  />
                </div>

                <div id="createProductFormFile" className="relative flex items-center">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                <div id="createProductFormImage" className="flex space-x-4">
                  {imagesPreview?.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" className="w-20 h-20 object-cover rounded-md" />
                  ))}
                </div>

                <button
                  id="createProductBtn"
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>

    </Fragment>
  )
}

export default NewProduct
