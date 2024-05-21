import React, { Fragment, useState } from 'react'
import { FaSpellCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdAccountTree } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import TitleHeader from '../../components/layout/TitleHeader';


const UpdateProduct = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
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

  const updateProductSubmitHandler = () => {

  }
  const updateProductImagesChange = () => {

  }

  return (
    <Fragment>
      <TitleHeader title="Create Product" />
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
        <form
          className="space-y-6"
          encType="multipart/form-data"
          onSubmit={updateProductSubmitHandler}
        >
          <div className="relative">
            <FaSpellCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <MdAttachMoney className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              ></textarea>
            </div>

          <div className="relative">
            <MdAccountTree className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose Category</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <GrStorage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              placeholder="Stock"
              required
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
             <div id="createProductFormFile" className="relative flex items-center">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div className="flex space-x-2">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="old_product_preview" className="w-20 h-20 object-cover rounded-md" />
                ))}
            </div>

            <div className="flex space-x-2">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="product_preview" className="w-20 h-20 object-cover rounded-md" />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // disabled={loading}
          >
            Create
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default UpdateProduct
