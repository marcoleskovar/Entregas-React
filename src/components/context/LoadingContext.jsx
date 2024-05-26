import { createContext, useContext, useState } from "react"
import { LoadingSpinner } from "../LodingSpinner"

export const LoadingContext = createContext ()

export const LoadingContextProvider = ({children}) => {
    const [loading, setLoading] = useState (true)
    
    const setLoadingState = (isLoading) => {
        setLoading (isLoading)
    }

    return (
        <LoadingContext.Provider value={{loading, setLoadingState}}>
            {loading && <LoadingSpinner />}
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoadingContext = () => useContext (LoadingContext)