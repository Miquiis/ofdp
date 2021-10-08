import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthProvider, { useAuth } from '../contexts/AuthContext'
import DatabaseProvider from '../contexts/DatabaseContext'

function AuthComponent({ component: Component}) {
    const { currentUser, userProfile } = useAuth()
    if (currentUser == null || userProfile == null) {
        return <Redirect to="/login"/>
    }
    return (
        <Component/>
    )
}

export default function AuthRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}>
            <AuthProvider>
                <DatabaseProvider>
                    <AuthComponent component={Component}/>
                </DatabaseProvider>
            </AuthProvider>
        </Route>
    )
}
