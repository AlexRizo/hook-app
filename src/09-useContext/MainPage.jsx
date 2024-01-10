import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const MainPage = () => {
    return (
        <UserProvider>
            <h1>MainPage</h1>
                <Navbar />
            <hr />

            <Outlet/>
        </UserProvider>
    )
}
