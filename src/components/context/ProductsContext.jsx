import { collection, getDocs, getFirestore } from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
import { useLoadingContext } from "./LoadingContext"

export const ProductsContext = createContext ([])

export const ProductsContextProvider = ({children}) => {
    const [prods, setProds] = useState ([])
    const {setLoadingState} = useLoadingContext()

    useEffect (() => {
        const fetchProducts = async () => {
            setLoadingState (true)
            const db = getFirestore ()
            const prodCollection = collection (db, 'products')
    
            const snapshot = await getDocs (prodCollection)
            if (snapshot.size > 0) {
                setProds (snapshot.docs.map (prod => ({id: prod.id, ...prod.data()})))
            }
            setLoadingState (false)
        }
        fetchProducts ()
    }, [])

    return (
        <ProductsContext.Provider value={prods}>
            {children}
        </ProductsContext.Provider>
    )
}