import React,{useEffect} from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { currentUserFetch } from '../redux/stores/CurrentUserSlice';

const Routes = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser.user)

    useEffect(() => {
        dispatch(currentUserFetch());
    }, [dispatch]);

    console.log("USER===>>",user)
    
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
