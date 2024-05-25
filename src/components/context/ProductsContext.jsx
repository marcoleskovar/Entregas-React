import { collection, getDocs, getFirestore } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"
import { LoadingContext } from "./LoadingContext"
import { LoadingSpinner } from "../LodingSpinner"

export const ProductsContext = createContext ([])

export const ProductsContextProvider = ({children}) => {
    const [prods, setProds] = useState ([])
    const {loading, setLoading} = useContext (LoadingContext)

    useEffect (() => {
        const fetchProducts = async () => {
            setLoading (true)
            const db = getFirestore ()
            const prodCollection = collection (db, 'products')
    
            const snapshot = await getDocs (prodCollection)
            if (snapshot.size > 0) {
                setProds (snapshot.docs.map (prod => ({id: prod.id, ...prod.data()})))
            }
            setLoading (false)
        }
        fetchProducts ()
    }, [setLoading])

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <ProductsContext.Provider value={prods}>
            {children}
        </ProductsContext.Provider>
    )
}