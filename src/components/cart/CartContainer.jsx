//* STYLE: _cartContainer.scss

import { useContext } from "react"
import { CartInfo } from "./CartInfo"
import { CartList } from "./CartList"
import { CartContext } from "../context/CartContex"
import { Link } from "react-router-dom"

export const CartContainer = () => {
    const {cartList, removeItem, totalInCart} = useContext (CartContext)

    const totalPrice = cartList.length > 0 ? 
    cartList.reduce ((total, product) => {
        return total + (product.quantity * product.price)
    }, 0) : 0

    return (
        cartList.length > 0 ? (
            <div className="cartContainer">
                <CartList cartList={cartList} removeItem={removeItem}/>
                <CartInfo totalQuantity={totalInCart} totalPrice={totalPrice}/>
            </div>
        ) : (
            <div className="cartContainer empty">
                <h2 className="empty-text">No hay productos en el carrito</h2>
                <button className="empty-btn">
                    <Link to={'/'} className="empty-btn-link">
                        Ver Productos
                    </Link>
                </button>
            </div>
        )
    )
}