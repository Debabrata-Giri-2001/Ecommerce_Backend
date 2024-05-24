import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import { Route,Navigate,redirectDocument } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    const user = useSelector(state => state.currentUser.user)
    const status = useSelector(state => state.currentUser.status);

    console.log("loag router==>",isAdmin)

    return (
        <Fragment>
                <Route
                    {...rest}
                    render={(props) => {
                        if (!user) {
                            return <Navigate to="/login" />;
                        }

                        if (isAdmin === true && user?.role !== "admin") {
                            return <Navigate to="/login" />;
                        }

                        return <Component {...props} />;
                    }}
                />
        </Fragment>
    )
}

export default ProtectedRoute
