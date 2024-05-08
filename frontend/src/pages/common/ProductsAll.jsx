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

    // Function to handle slider value change
    const handlePrice = (event) => {
        setPriceValue(event.target.value);
    };

    const handelRate = (event) => {
        setRatings(event.target.value);
    }
    const handelInputQuery = (event) => {
        setInputQuery(event.target.value)
    }

    const handelReset = () => {
        setCategory("")
        setRatings(0)
        setInputQuery("")
        setPriceValue(1)
    }

    useEffect(() => {
        // Dispatch the fetchProducts action when the component mounts
        dispatch(fetchProducts({ priceValue, category, ratings, inputQuery }));
    }, [dispatch, priceValue, category, ratings, inputQuery]);


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

    console.log("Q==>",inputQuery)

    return (
        <div className='h-full'>
            <Header />
            <hr />
            <div className='flex flex-row w-full mt-'>
                {/* filter */}
                <aside className='w-1/3 px-4 border-r border-gray-300 fixed h-full overflow-y-auto'>
                    <h2 className='text-lg font-semibold text-gray-800 mb-4'>Filter</h2>
                    {/* unput data */}
                    <input id='input-query' type='text' value={inputQuery} onChange={handelInputQuery} />
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
                {products.length === 0 ?
                    <div className='w-2/3 ml-[33.3333%]'>
                        <EmptyData />
                    </div>
                    :
                    <main className='w-2/3 ml-[33.3333%] overflow-y-auto'>
                        <div className='flex flex-col px-2'>
                            <h1 className='font-bold text-2xl text-gray-800'>Products</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                {/* Product Cards */}
                                {products?.map(product => (
                                    <Link key={product?._id} to={`/product/${product?._id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Pagination */}
                        <div className='flex justify-center py-2'>
                            <button className='border-2 rounded-l-md p-2 border-gray-400 bg-gray-800 text-gray-50'>Previous</button>
                            <button className='border-2 rounded-r-md p-2 border-gray-400 bg-gray-800 text-gray-50'>Next</button>
                        </div>
                    </main>
                }
            </div>
        </div>

    )
}

export default ProductsAll
