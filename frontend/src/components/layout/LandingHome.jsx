import React from 'react';

const LandingHome = () => {


    return (
        <div className="relative px-12 h-[60vh]">
            {/* row 1 */}
            <div className='flex flex-row w-full h-[30vh]'>
                {/* poster one */}
                <div className='w-[50%] bg-[#FFA954] mx-4 my-2 flex flex-row-reverse justify-between'>
                    <div className='w-[50%] items-start self-center'>
                        <p className='text-slate-50 font-Ubuntu text-md font-normal'>#EXCLUSIVE</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-5xl'>MEN’S COLLECTIONS</p>
                        <p className='text-slate-50 font-Ubuntu  text-lg font-semibold'>#LATEST_COLLECTION2024</p>
                    </div>
                    <div>
                        <img className='object-cover w-full h-full' src="https://bazar-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-39.1d6d751c.png&w=256&q=75" alt="ps_1" />
                    </div>
                </div>
                {/* poster two */}
                <div className='w-[25%] bg-[#62C8CA] mx-4 my-2 flex flex-row'>
                    <div className='items-start self-center px-2'>
                        <p className='text-slate-50 font-Ubuntu text-md font-normal'>#NEW</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-5xl'>SPORTS</p>
                    </div>
                    <div>
                        <img className='object-cover w-full h-full' src="https://bazar-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-40.feea6431.png&w=384&q=75" alt="ps_2" />
                    </div>
                </div>
                {/* poster three */}
                <div className='w-[25%] bg-[#D95A45] mx-4 my-2 flex flex-row'>
                    <div className='px-2 py-2'>
                        <p className='text-slate-50 font-Ubuntu text-md font-normal'>#DRESS</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-5xl'>WOMEN</p>
                    </div>
                    <div>
                        <img className='object-cover w-full h-full' src="https://bazar-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-41.e358d7fa.png&w=384&q=75" alt="ps_3" />
                    </div>
                </div>
            </div>
            {/* row 2 */}
            <div className='flex flex-row w-full h-[30vh]'>
                {/* poster four */}
                <div className='w-[25%] bg-[#EEAC01] mx-4 my-2 flex flex-row-reverse'>
                    <div className='px-2 py-2'>
                        <p className='text-slate-50 font-Ubuntu text-lg font-normal'>#SUNGLASSES</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-4xl'>50% OFF</p>
                    </div>
                    <div>
                        <img className='object-cover w-full h-full' src="https://bazar-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-42.d444c63f.png&w=384&q=75" alt="ps_4" />
                    </div>
                </div>
                {/* poster five */}
                <div className='w-[25%] bg-[#76D2CA] mx-4 my-2 text-center items-center '>
                    <p className='text-slate-50 font-Ubuntu text-md font-normal'>#EXPLORE</p>
                    <p className='text-slate-50 font-Ubuntu font-extrabold text-5xl'>COUPONS</p>
                    <p className='text-slate-50 font-Ubuntu  text-lg font-semibold'>#LATEST_COLLECTION2024</p>
                </div>
                {/* poster six */}
                <div className='w-[50%] bg-[#E7C405] mx-4 my-2 flex flex-row justify-between relative'>
                    <div className='items-center text-center self-center z-10'>
                        <p className='text-slate-50 font-Ubuntu text-lg font-normal'>#EXCLUSIVE</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-6xl'>NEW GADGETS</p>
                        <p className='text-slate-50 font-Ubuntu font-extrabold text-xl'>#LATEST_COLLECTION2024</p>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full bg-blend-screen'>
                        <img className='object-cover w-full h-full' src="https://bazar-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-43.5a7b6ce1.png&w=640&q=75" alt="ps_3" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingHome;
