import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const { isLoggedIn } = useSelector(state => state.authSlice)
    const history = useHistory()

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isLoggedIn === true ? <Component {...props} /> : <Redirect to="/admin/login" />
                // isLoggedIn === true ? console.log("Logged in") : console.log("not")
                // isLoggedIn === false && <Component {...props} />
            }
        />
    );
}

export default ProtectedRoute;