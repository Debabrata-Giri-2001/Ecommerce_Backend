import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux';
import { currentUserFetch } from '../redux/stores/CurrentUserSlice';
import Dashboard from '../pages/admin/Dashboard';
import NewProduct from '../pages/admin/NewProduct';
import OrderList from '../pages/admin/OrderList';
import ProcessOrder from '../pages/admin/ProcessOrder';
import ProductList from '../pages/admin/ProductList';
import ProductReviews from '../pages/admin/ProductReviews';
import UpdateProduct from '../pages/admin/UpdateProduct';
import UpdateUser from '../pages/admin/UpdateUser';
import UsersList from '../pages/admin/UsersList';
import ProtectedRoute from '../components/route/ProtectedRoute';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const Routes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentUserFetch());
    }, [dispatch]);

    return (
        <>
            <Router>
                <Header />
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

                    <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path='/admin/new-product' element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
                    <Route path='/admin/order-list' element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
                    <Route path='/admin/process-order' element={<ProtectedRoute><ProcessOrder /></ProtectedRoute>} />
                    <Route path='/admin/product-list' element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
                    <Route path='/admin/product-reviews' element={<ProtectedRoute><ProductReviews /></ProtectedRoute>} />
                    <Route path='/admin/update-product' element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>} />
                    <Route path='/admin/update-user' element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
                    <Route path='/admin/users-list' element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
                </Rtrs>
                <Footer />
            </Router>
        </>
    )
}

export default Routes;
