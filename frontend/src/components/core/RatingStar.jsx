import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const RatingStar = ({ rating, size }) => {
    return (
        <div className='flex space-x-1'>
            {Array.from({ length: 5 }, (_, index) => {
                let number = index + 0.5;
                return (
                    <div key={index}>
                        {rating >= index + 1 ? (
                            <FaStar color='#e9970a' size={size} />
                        ) : rating >= number ? (
                            <FaStarHalfAlt color='#e9970a' size={size} />
                        ) : (
                            <FaRegStar color='#e9970a' size={size} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default RatingStar
