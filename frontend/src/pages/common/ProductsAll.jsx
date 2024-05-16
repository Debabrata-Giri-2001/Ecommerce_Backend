import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import { fetchProducts } from '../../redux/stores/ProductsSlice';
import ProductCard from '../../components/layout/ProductCard';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import EmptyData from '../../components/core/EmptyData';

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

    const handelRate = (event) => {
        setRatings(event.target.value);
    }
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

    useEffect(() => {
        // Dispatch the fetchProducts action when the component mounts
        dispatch(fetchProducts({ priceValue, category, ratings, inputQuery, page }));
    }, [dispatch, priceValue, category, ratings, inputQuery, page]);


    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];
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
            <div className='flex flex-row w-full mt-'>
                {/* filter */}
                <aside className='w-1/3 px-4 border-r border-gray-300 fixed h-full overflow-y-auto'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-4'>Filter</h2>
                    {/* unput data */}
                    <div className='flex flex-row space-x-3'>
                        <input id='input-query' type='text' value={inputQuery} onchange={handelInputQuery} />
                        <button onClick={handelInputSubmit}>
                            <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="search" />
                        </button>
                    </div>

                    {/* Price Range */}
                    <div className='mb-4'>
                        <label htmlFor="price-range" className="block text-sm font-medium text-gray-800 mb-2">Price Range</label>
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
                    <div className='mb-4'>
                        <p className='text-lg font-medium text-gray-800 mb-2'>Categories</p>
                        <ul>
                            {categories.map((category) => (
                                <li
                                    className="text-lg text-gray-600 cursor-pointer hover:text-[#ff6347] hover:font-bold transition-colors duration-300"
                                    key={category}
                                    onClick={() => setCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ratings */}
                    <div className='mb-4'>
                        <p className='text-sm font-medium text-gray-800 mb-2'>Ratings Above</p>
                        <input
                            id="ratings-range"
                            type="range"
                            min="1"
                            max="5"
                            value={ratings}
                            onChange={handelRate}
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm">
                            <span>1</span>
                            <span>5</span>
                        </div>
                    </div>

                    <button onClick={handelReset} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 text-md px-4 rounded-md w-1/2">
                        Reset
                    </button>
                </aside>
                {/* all products */}
                {products?.products?.length === 0 ?
                    <div className='w-2/3 ml-[33.3333%]'>
                        <EmptyData />
                    </div>
                    :
                    <main className='w-2/3 ml-[33.3333%] overflow-y-auto'>
                        <div className='flex flex-col px-2'>
                            <h1 className='font-bold text-2xl text-gray-800'>Products</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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

    )
}

export default ProductsAll
