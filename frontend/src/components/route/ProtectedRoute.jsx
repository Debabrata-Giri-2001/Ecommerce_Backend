import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
    const user = useSelector(state => state.currentUser.user);



    return <Outlet />;
}

export default ProtectedRoute;
