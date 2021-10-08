import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useFicha } from '../contexts/FichaContext'

export default function FichaRoute({ component: Component, ...rest }) {
    const { currentUser, userProfile } = useAuth()
    const { ficha } = useFicha()
    return (
        <Route {...rest} render={props => {
            return currentUser && userProfile && ficha ? <Component {...props} /> : <Redirect to="/"/>
        }}>
        </Route>
    )
}
