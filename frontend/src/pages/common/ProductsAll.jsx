import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import { fetchProducts } from '../../redux/stores/ProductsSlice';
import ProductCard from '../../components/layout/ProductCard';
import { Link } from 'react-router-dom';

const ProductsAll = () => {


    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const status = useSelector(state => state.products.status);
    // const error = useSelector(state => state.products.error);

    useEffect(() => {
        // Dispatch the fetchProducts action when the component mounts
        dispatch(fetchProducts());
    }, [dispatch]);



    const [priceValue, setPriceValue] = useState(1);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    // Function to handle slider value change
    const handlePrice = (event) => {
        setPriceValue(event.target.value);
    };

    const handelRate = (event) => {
        setRatings(event.target.value);
    }

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

    console.log(category)
    return (
        <div className='flex flex-row w-full h-fit'>
            {/* filter */}
            <div className='w-[30%] bg-gray-100 h-[100vh] p-4 border-r border-gray-300 overflow-auto'>
                <h2 className='text-lg font-semibold text-gray-800 mb-4'>Filter</h2>
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
                                className="text-lg text-gray-600 cursor-pointer hover:text-[#ff6347] transition-colors duration-300"
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
            </div>
            {/* all products */}
            <div className='w-[70%] h-screen overflow-y-auto '>
                <div className='flex flex-col gap-5 px-2'>
                    <h1 className='font-bold text-2xl text-slate-500'>Products</h1>
                    <div className="w-full grid items-center gap-7 grid-cols-4">
                        {products?.map(product => (
                            <Link key={product?._id} to={`/product/${product?._id}`}>
                                <ProductCard product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Pagination */}
                <div className='flex flex-row space-x-3 justify-center py-2'>
                    <button className='border-2 rounded-l-md p-2 w-24 border-slate-400 bg-slate-800 text-slate-50'>Previoud</button>
                    <button className='border-2 rounded-r-md p-2 w-24 border-slate-400 bg-slate-800 text-slate-50'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsAll
