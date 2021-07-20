import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { verifyadmin } from "./auth.js"

function Protectadmin({ component: Component, ...rest }) {
    return (
        <>
            <Route
                {...rest}
                render={(props) => {
                    if (verifyadmin()) {
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

export default Protectadmin
