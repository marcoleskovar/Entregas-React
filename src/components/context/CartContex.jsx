import { createContext, useEffect, useState } from "react"

export const CartContext = createContext ()

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([])
    const [totalInCart, setTotalInCart] = useState(0)

    const addItem = (item, quantity) => {
        const idx = cartList.findIndex (p => p.id === parseInt (item.id))
        if (idx !== -1)  {
            const cart = [...cartList]
            cart[idx].quantity += quantity
            setCartList (cart)
        }else {
            setCartList([...cartList, {...item, quantity}])
        }
    }

    const removeItem = (itemId) => {
        const cart = [...cartList]
        cart.filter (p => p.id !== parseInt(itemId))
        setCartList (cart)
    }

    const clear = () => {
        setCartList ([])
    }

    const isInCart = (id) => {
        const exist = cartList.includes(parseInt(id))
        return exist
    }

    useEffect (() => {
        const totalQuantity = cartList.reduce((acumulator, product) => {
            return acumulator + product.quantity
        }, 0)
        setTotalInCart (totalQuantity)
    }, [cartList])

    return (
        <CartContext.Provider value={{cartList, totalInCart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}