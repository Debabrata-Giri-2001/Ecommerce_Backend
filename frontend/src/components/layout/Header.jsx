import React, { useState } from 'react';
import Darkmode from '../../config/Darkmode';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { CiSun, CiLight, CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [colorTheme, setTheme] = Darkmode();

    return (
        <div className='flex items-center justify-between  w-full z-50'>
            {/* Image_logo */}
            <div className="p-1">
                <NavLink to='/'><img className='w-12 md:w-12' src={'https://cdn-icons-png.freepik.com/512/3176/3176363.png'} alt="logo" /></NavLink>
            </div>

            {/* Md View Nav */}
            <div className='md:hidden p-2'>
                <CiMenuBurger size={'30'} color='#d0e1d4' onClick={() => setShowNav(!showNav)} />
            </div>

            {/* Navbar head */}
            <div className={`md:flex justify-center items-center space-x-4 ${showNav ? 'block' : 'hidden'} md:block md:relative md:space-x-0 md:space-y-0 md:p-0 md:w-auto md:bg-transparent md:opacity-100`}>
                <div className='absolute top-0 right-0 m-2 md:hidden'>
                    <IoMdClose size={'30'} color='#d0e1d4' onClick={() => setShowNav(!showNav)} />
                </div>
                <ul className='p-4 text-color4 md:text-color4 text-center text-xl font-Ubuntu flex flex-col md:flex-row'>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/'>Home</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/abha'>Product</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/dashboard'>Cart</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/verifycertificate'>Profile</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/faq'>FAQ</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                </ul>

            </div>

            {/* Dark Toggle */}
            <div className='w-12 p-1'>
                <span onClick={() => setTheme(colorTheme)}>
                    {colorTheme === 'dark' ? <CiSun size={'30'} color='#d0e1d4' /> : <CiLight size={'30'} color='#1a1b25'  />}
                </span>
            </div>
        </div>
    );
};

export default Header;
