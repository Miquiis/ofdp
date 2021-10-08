import React from 'react'
import ChangeUserProvider from '../contexts/ChangeUserContext'
import CharactersProvider from '../contexts/CharactersContext'
import FichaProvider from '../contexts/FichaContext'
import RolagemProvider from '../contexts/RolagemContext'

export default function FichaProviders({ children }) {
    return (
        <FichaProvider>
            <CharactersProvider>
                <ChangeUserProvider>
                    <RolagemProvider>
                        {children}
                    </RolagemProvider>
                </ChangeUserProvider>
            </CharactersProvider>
        </FichaProvider>
    )
}
