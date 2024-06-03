import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { currentUserFetch } from '../../redux/stores/CurrentUserSlice';

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser.user);

    useEffect(() => {
        dispatch(currentUserFetch());
    }, [dispatch]);

    if (!user) {
        return <Navigate to="/" />;
    } else if (user && user.role === 'admin') {
        return <Navigate to="/admin/dashboard" />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
