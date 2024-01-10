import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has ocurred.</p>
            <p>
                <strong>Error: </strong>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    )
}
