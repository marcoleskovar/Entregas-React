import { createContext } from "react"

export const ProductsContext = createContext ([])

export const ProductsContextProvider = ({products, children}) => {
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}