import React from "react";
import { useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";
import { ErrorQuote } from "./ErrorQuote";

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError, increment } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/`
    );

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Coutes</h1>
            <hr />

            { isLoading ?
                <LoadingQuote>  </LoadingQuote>
            :
                <Quote quote={ quote } author={ author }></Quote>
             }

            { hasError && <ErrorQuote error={ hasError }></ErrorQuote> }

            <button
                type="button"
                className="btn btn-primary"
                onClick={ increment }
                disabled={ isLoading }
            >
                Next Quote
            </button>
        </>
    );
};

export default MultipleCustomHooks;
