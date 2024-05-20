import React from 'react'
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    const user = useSelector(state => state.currentUser.user)
    const status = useSelector(state => state.currentUser.status);


    return (
        <Fragment>
            {status === 'loading' && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!user) {
                            return <Redirect to="/login" />;
                        }

                        if (isAdmin === true && user?.role !== "admin") {
                            return <Redirect to="/login" />;
                        }

                        return <Component {...props} />;
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute
