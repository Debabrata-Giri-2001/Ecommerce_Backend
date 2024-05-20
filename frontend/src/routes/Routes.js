import React from 'react'
import { BrowserRouter as Router, Routes as Rtrs, Route } from 'react-router-dom';
import Home from '../pages/common/Home';
import ProductDetails from '../pages/common/ProductDetails';
import ProductsAll from '../pages/common/ProductsAll';
import LogIn from '../pages/auth/LogIn';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Register from '../pages/auth/Register';
import Profile from '../pages/private/Profile';
import Carts from '../pages/common/Carts';
import Faq from '../pages/common/Faq';
import { useSelector } from 'react-redux';

const Routes = () => {

    const user = useSelector(state => state.currentUser.user)
    console.log("user---->",user)
    return (
        <>
            <Router>
                <Rtrs>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                    <Route path='/products' element={<ProductsAll />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/carts' element={<Carts />} />
                    <Route path='/faq' element={<Faq />} />
                </Rtrs>
            </Router>
        </>
    )
}

export default Routes;
