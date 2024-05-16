import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import { fetchProducts } from '../../redux/stores/ProductsSlice';
import ProductCard from '../../components/layout/ProductCard';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import EmptyData from '../../components/core/EmptyData';
import { MdOutlineFilterList, MdOutlineFilterListOff } from "react-icons/md";
import RatingStar from '../../components/core/RatingStar';


const ProductsAll = () => {


    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const status = useSelector(state => state.products.status);
    // const error = useSelector(state => state.products.error);

    const [priceValue, setPriceValue] = useState(1);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    const [inputQuery, setInputQuery] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 5;



    // handel pagination all functin
    const itemsPerPage = 10;
    const totalPages = Math.ceil(products.productCount / itemsPerPage);

    const handleClick = (pageNumber) => {
        let newPage = pageNumber;

        // Ensure newPage is never less than 1
        if (newPage < 1) newPage = 1;

        setPage(newPage);
    };

    const getVisiblePages = (currentPage) => {
        const middlePage = Math.ceil(pageSize / 2);
        let startPage = currentPage - middlePage + 1;
        if (startPage < 1) startPage = 1;

        const sizePage = [];
        for (let i = startPage; i < startPage + pageSize; i++) {
            sizePage.push(i);
        }
        return sizePage;
    };

    const visiblePages = getVisiblePages(page);

    const handlePrice = (event) => {
        setPriceValue(event.target.value);
    };

    const handelInputQuery = (event) => {
        setInputQuery(event.target.value)
    }

    const handelInputSubmit = () => {
        setInputQuery("");
    }

    const handelReset = () => {
        setCategory("")
        setRatings(0)
        setInputQuery("")
        setPriceValue(1)
        setPage(1)
    }

    const [openMenu, setOpneMenu] = useState(true);
    useEffect(() => {
        // Dispatch the fetchProducts action when the component mounts
        dispatch(fetchProducts({ priceValue, category, ratings, inputQuery, page }));
    }, [dispatch, priceValue, category, ratings, inputQuery, page]);


    const categories = [
        "Clothing and Accessories",
        "Clothing and Accessories",
        "Bags, Wallets & Belts",
        "Footwear",
        "Toys",
    ];

    const ratingCategory = [
        4, 3, 2, 1
    ]
    // Render loading state
    if (status === 'loading') {
        return <Loader />;
    }
    // Render error state
    if (status === 'failed') {
        return <Error />;
    }

    return (
        <div className='h-full'>
            <Header />
            <hr />
            <div className='flex flex-row w-full'>
                {/* filter */}
                {openMenu && (
                    <aside className='w-[20%] px-4 border-r border-gray-300 h-full overflow-y-auto'>
                        <filterDiv className='flex flex-row justify-between'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-4 font-Kanit'>Filter</h2>
                            <p onClick={() => { setOpneMenu(!openMenu) }} className='cursor-pointer'>
                                <MdOutlineFilterList size={22} color='#121212' />
                            </p>
                        </filterDiv>
                        <hr className='my-5' />
                        {/* unput data */}
                        <div className='flex justify-between py-1 px-2 border rounded-md'>
                            <input id='input-query' type='text' className='outline-none border-none' placeholder='search...' value={inputQuery} onchange={handelInputQuery} />
                            <button onClick={handelInputSubmit}>
                                <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="search" />
                            </button>
                        </div>

                        {/* Price Range */}
                        <div className='py-4'>
                            <label htmlFor="price-range" className="block text-md font-medium text-gray-800 mb-2 font-Kanit">Price Range</label>
                            <input
                                id="price-range"
                                type="range"
                                min="1"
                                max="100"
                                value={priceValue}
                                onChange={handlePrice}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-sm">
                                <span>₹1</span>
                                <span>₹10000</span>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className='mb-4 border p-2 rounded-md'>
                            <p className='text-lg font-medium font-Kanit text-gray-800 mb-2'>Categories</p>
                            <hr className='py-3' />
                            <ul>
                                {categories.map((category) => (
                                    <li
                                        className="text-lg py-2 text-gray-600 cursor-pointer hover:text-[#ff6347] font-Kanit transition-colors duration-300"
                                        key={category}
                                        onClick={() => setCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ratings */}
                        <div className='mb-4 border p-2 rounded-md'>
                            <p className='text-lg font-medium font-Kanit text-gray-800 mb-2'>Ratings Above</p>
                            <hr />
                            <div className='py-2'>
                                {ratingCategory?.map(i => (
                                    <div onClick={()=>{setRatings(i)}} className="flex flex-row items-center space-x-1 py-1 cursor-pointer">
                                        <RatingStar rating={i} size={18} />
                                        <span className="font-Kanit font-normal text-md text-amber-900">(& up)</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <button onClick={handelReset} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-md px-4 rounded-md ">
                            Reset
                        </button>
                    </aside>
                )}

                <div className='w-[80%]'>
                    {/* all products */}
                    {products?.products?.length === 0 ?
                        <div className='w-full '>
                            <EmptyData />
                        </div>
                        :
                        <main className='w-full overflow-y-auto'>
                            <div className='flex flex-col px-1'>
                                <h1 className='font-bold text-2xl text-gray-800'>Products</h1>
                                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
                                    {/* Product Cards */}
                                    {products?.products?.map(product => (
                                        <Link key={product?._id} to={`/product/${product?._id}`}>
                                            <ProductCard product={product} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="flex justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                <div className="flex items-center">
                                    <pagination className="isolate inline-flex -space-x-px rounded-md shadow-sm " >
                                        <p onClick={() => { setPage(page - 1) }} className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                            </svg>
                                        </p>
                                        {visiblePages.map((i) => (
                                            <button
                                                key={i}
                                                className={`p-2 border ${page === i ? "bg-blue-500 text-white" : "bg-white text-black"
                                                    }`}
                                                onClick={() => { handleClick(i) }}
                                            >
                                                {i}
                                            </button>
                                        ))}
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                        <button
                                            className={`p-2 border`}
                                            onClick={() => { setPage(totalPages) }}
                                        >
                                            {totalPages}
                                        </button>
                                        <p onClick={() => { setPage(page + 1) }} className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                            </svg>
                                        </p>
                                    </pagination>
                                </div>
                            </div>
                        </main>
                    }
                </div>

            </div>
        </div>

    )
}

export default ProductsAll
