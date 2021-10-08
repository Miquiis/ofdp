import React from 'react'
import ChangeUserProvider from '../contexts/ChangeUserContext'
import CharactersProvider from '../contexts/CharactersContext'
import FichaProvider from '../contexts/FichaContext'
import RolagemProvider from '../contexts/RolagemContext'

export default function FichaProviders({ children }) {
    return (
        <RolagemProvider>
            <FichaProvider>
                <CharactersProvider>
                    <ChangeUserProvider>
                        {children}
                    </ChangeUserProvider>
                </CharactersProvider>
            </FichaProvider>
        </RolagemProvider>
    )
}
