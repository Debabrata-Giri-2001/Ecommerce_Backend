import React from 'react';
import { BiSolidMouse } from "react-icons/bi";
import Shape1 from "../../assets/image/shape1.svg";
import Shape2 from "../../assets/image/shape2.svg";
import Shape3 from "../../assets/image/shape3.svg";

const LandingHome = () => {
    return (
        <div className="relative overflow-hidden h-[90vh]">
            <img src={Shape1} alt="shape1" className='absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 opacity-70' />
            <img src={Shape2} alt="shape2" className='absolute -right-1/4 top-2/3 w-1/2 h-1/2 opacity-70' />
            <img src={Shape3} alt="shape3" className='absolute left-2/4 top-1 w-1/2 h-1/2 opacity-70' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-color3 font-Ubuntu">Welcome.</h1>
                <div className="flex justify-center mt-3">
                    <div className="animate-bounce ">
                        <BiSolidMouse size={'34'} color='#009dc0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingHome;
