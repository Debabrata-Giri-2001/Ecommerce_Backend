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

                    {/* <Route element={<ProtectedRoute isAdmin={true} />}> */}
                        <Route path='/admin/dashboard' element={<Dashboard />} />
                        <Route path='/admin/new-product' element={<NewProduct />} />
                        <Route path='/admin/order-list' element={<OrderList />} />
                        <Route path='/admin/process-order' element={<ProcessOrder />} />
                        <Route path='/admin/product-list' element={<ProductList />} />
                        <Route path='/admin/product-reviews' element={<ProductReviews />} />
                        <Route path='/admin/update-product' element={<UpdateProduct />} />
                        <Route path='/admin/update-user' element={<UpdateUser />} />
                        <Route path='/admin/users-list' element={<UsersList />} />
                    {/* </Route> */}
                </Rtrs>
            </Router>
        </>
    )
}

export default Routes;
