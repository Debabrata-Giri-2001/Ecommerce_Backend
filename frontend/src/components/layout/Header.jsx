import React, { useState } from 'react';
import Darkmode from '../../config/Darkmode';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { CiSun, CiLight, CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [colorTheme, setTheme] = Darkmode();

    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };
    const handleLogOut = () => {
        // Split cookies into an array
        const cookies = document.cookie.split(";");
    
        // Iterate over each cookie and remove it
        cookies.forEach(cookie => {
            const cookieParts = cookie.split("=");
            const cookieName = cookieParts[0].trim();
            document.cookie = `${cookieName}=token;`;
        });
    
        // Navigate to the login page
        navigate('/login');
    };
    const navigate = useNavigate();

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
                        <NavLink onClick={() => setShowNav(!showNav)} to='/products'>Product</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/dashboard'>Cart</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/profile'>Profile</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/faq'>Faq</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                </ul>

            </div>

            {/* Dark Toggle */}
            <div className='relative w-12 p-2 mr-2 border' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span onClick={() => navigate('/profile')} className='cursor-pointer'>
                    <FaUser size={'30'} color='#292a2b' />
                </span>
                {showOptions && (
                    <div className='absolute z-10 top-full -left-10 bg-white border border-gray-300 rounded-md shadow-md p-2 mt-1'>
                        {/* Logout and Login options */}
                        <button onClick={() => navigate('/profile')} className='block w-full text-left py-1 hover:bg-gray-100'>Profile</button>
                        <button onClick={handleLogOut} className='block w-full text-left py-1 hover:bg-gray-100'>Logout</button>
                        <button onClick={() => navigate('/login')} className='block w-full text-left py-1 hover:bg-gray-100'>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
