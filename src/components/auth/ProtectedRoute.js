import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { verifylogin } from "./auth.js"

function ProtectedRoutes({ component: Component, ...rest }) {
    return (
        <>
            <Route
                {...rest}
                render={(props) => {
                    if (verifylogin()) {
                        return <Component  {...props} />
                    } else {
                        return <Redirect to={{
                            pathname: "/login", state: { from: props.location }
                        }} />
                    }
                }}
            />
        </>
    )
}

export default ProtectedRoutes
