import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser, userProfile } = useAuth()

    return (
        <Route {...rest} render={props => {
            return currentUser && userProfile ? <Component {...props} /> : <Redirect to="/login"/>
        }}>
        </Route>
    )
}
