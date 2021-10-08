import React from 'react'
import AuthProvider from '../contexts/AuthContext'
import DatabaseProvider from '../contexts/DatabaseContext'

export default function AuthProviders({ children }) {
    return (
        <AuthProvider>
            <DatabaseProvider>
                {children}
            </DatabaseProvider>
        </AuthProvider>
    )
}
