import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthProvider, { useAuth } from '../contexts/AuthContext'

function NoAuthComponent({ component: Component}) {
    const { currentUser, userProfile } = useAuth()
    if (currentUser !== null || userProfile !== null) {
        return <Redirect to="/"/>
    }
    return (
        <Component/>
    )
}

export default function NoAuthRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}>
            <AuthProvider>
                <NoAuthComponent component={Component}/>
            </AuthProvider>
        </Route>
    )
}
