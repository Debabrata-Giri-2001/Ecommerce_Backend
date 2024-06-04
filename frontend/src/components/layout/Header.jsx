import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector(state => state.currentUser.user)
    const auth = useSelector(state => state.auth)
    const [showNav, setShowNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    {user?.user?.role === 'admin' || auth?.user?.role === 'admin' && (
                        <li className='m-1 p-2 relative group'>
                            <NavLink onClick={() => setShowNav(!showNav)} to='/admin/dashboard'>Dashboard</NavLink>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                        </li>
                    )}
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/products'>Product</NavLink>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-color3 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                    </li>
                    <li className='m-1 p-2 relative group'>
                        <NavLink onClick={() => setShowNav(!showNav)} to='/carts'>Cart</NavLink>
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
            <div className="relative inline-block text-left" ref={dropdownRef}>
                <div
                    onClick={handleToggle}
                    className=" border focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                    type="button"
                >
                    <FaUser size={22} />
                    <svg
                        className={`w-2.5 h-2.5 ml-3 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>

                {/* Dropdown menu */}
                <div
                    className={`absolute right-0 z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {user?.user  || auth?.user ?
                            <>
                                <li>
                                    <p onClick={() => { navigate('/profile') }} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Profile
                                    </p>
                                </li>
                                {user?.user?.role === 'admin' && (
                                    <li>
                                        <p onClick={() => { navigate('/admin/dashboard') }} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dashboard
                                        </p>
                                    </li>
                                )}
                                <li>
                                    <p onClick={handleLogOut} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white">
                                        Logout
                                    </p>
                                </li>
                                <li>
                                    <p onClick={() => { navigate('/forgot-password') }} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Change Password
                                    </p>
                                </li>
                            </>
                            :
                            <li>
                                <p onClick={() => { navigate('/login') }} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white">
                                    Login
                                </p>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
