import React from 'react'

const ProductCard = ({ product }) => {
    // const imageUrl = product
    return (
        <div className="bg-white shadow-md rounded-xl duration-500  hover:shadow-xl my-6 mx-2">
            <div className='h-48 w-full overflow-hidden'>
                <img
                    src={product?.images}
                    alt="Product"
                    className="hover:scale-105 overflow-hidden duration-300 h-40 w-full object-contain rounded-t-xl"
                />
            </div>
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{product?.brand}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{product?.title}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">₹{product?.selling_price}</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">₹{product?.actual_price}</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
