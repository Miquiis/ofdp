import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthProvider, { useAuth } from '../contexts/AuthContext'
import ChangeUserProvider from '../contexts/ChangeUserContext'
import CharactersProvider from '../contexts/CharactersContext'
import DatabaseProvider from '../contexts/DatabaseContext'
import FichaProvider, { useFicha } from '../contexts/FichaContext'

function FichasComponent({ component: Component}) {
    const { currentUser, userProfile } = useAuth()
    if (currentUser == null || userProfile == null) {
        return <Redirect to="/login"/>
    }
    return (
        <Component/>
    )
}

export default function FichasRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}>
            <AuthProvider>
                <DatabaseProvider>
                    <CharactersProvider>
                        <ChangeUserProvider>
                            <FichaProvider>
                                <FichasComponent component={Component}/>
                            </FichaProvider>
                        </ChangeUserProvider>
                    </CharactersProvider>
                </DatabaseProvider>
            </AuthProvider>
        </Route>
    )
}
