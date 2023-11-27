import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const useFetch = (url) => {

    const { counter, increment } = useCounter(1);
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });
        
        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            // hasError: `${url} not found.`,
            hasError: null,
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    useEffect(() => {
        getFetch();
    }, [counter]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        increment
    };
};
