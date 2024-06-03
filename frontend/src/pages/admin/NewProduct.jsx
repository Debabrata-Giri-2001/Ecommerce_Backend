import React, { Fragment, useState } from 'react'
import TitleHeader from '../../components/layout/TitleHeader'
import { FaSpellCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdAccountTree } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import SideBar from './SideBar';
import { useChage } from '../../hooks/useApi';
import { ToastContainer, toast } from 'react-toastify';


const NewProduct = () => {


  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [previewSources, setPreviewSources] = useState([]);

  const { chage, isChanging } = useChage();

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

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(e.target.value);

    files.forEach(file => previewFile(file));
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSources(prevSources => [...prevSources, reader.result]);
    };
  };

  const handelSubmit = async () => {
    const formData = new FormData();
    try {
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("stock", Stock);

      previewSources.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      const res = await chage(`/admin/product/new`, {
        body: formData,
        isFormData: true,
      })
      console.log("res->",res)
      if (res?.status === 201) {
        toast.success('Products created succesfuly.');
      } else {
        toast.error('Somthig want wrong.');
      }
    } catch (error) {
      console.log("erro==>",error)
      toast.error('ERROR!..');
    }
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
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                    value={images}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                  {previewSources?.map((src, index) => (
                    <img key={index} src={src} alt="chosen" className="h-20 w-20 object-cover" />
                  ))}
                </div>



                <p
                  className="w-full bg-blue-500 text-white cursor-pointer py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center font-semibold font-Kanit"
                  onClick={() => { handelSubmit() }}
                >
                  {isChanging ? (
                    <div className='flex justify-center'>
                      <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 4.418 3.582 8 8 8v-4zm8-9.457V6a8.014 8.014 0 01-3.535 6.465l1.414 1.414A6 6 0 1014 6.828zM5.414 6.828L4 5.414A8.014 8.014 0 016 0v3.543a5.978 5.978 0 00-1.586 3.285z"></path>
                      </svg>
                    </div>
                  ) : (
                    'create'
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
      <ToastContainer />
    </Fragment>
  )
}

export default NewProduct
