import React, { useContext } from 'react'
import UserContext from './context/userContext';

export const HomePage = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <h1>HomePage <small>{ user?.name }</small></h1>
            <hr />
            
        </>
    )
}
