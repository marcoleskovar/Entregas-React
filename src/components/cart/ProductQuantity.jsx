//* STYLE: _productQuantity.scss

import { useState } from "react"
import { AddToCartBtn } from "./AddToCartBtn"

export const ProductQuantity = ({stock, initial}) => {
    const [itemStock, setItemStock] = useState (stock) //TODO No debe tener un stock hardcodeado, el componente debe recibir un producto como parametro y pasarle el product.stock a ProductQuantity
    const [value, setValue] = useState (initial)
    const [insufficientStock, setinsufficientStock] = useState (false)

    const decrease = () => {
        setinsufficientStock (false)
        if (value > 1) setValue (value - 1)
    }
    const increment = () => {
        if (value < itemStock) setValue (value + 1)
        else setinsufficientStock (true)
    }
    const onAdd  = () => {
        setItemStock (itemStock - value)
        setValue (1)
    }

    return (
        <div className="selectQuantity">
            <div className="selectQuantity-controls">
                <button className={`selectQuantity-controls-btn less ${itemStock === 0 ? 'disabled' : ''}`} onClick={decrease} disabled={itemStock === 0}>-</button>
                <input className={`selectQuantity-controls-input ${itemStock === 0 ? 'disabled' : ''}`} type="number" value={itemStock === 0 ? 0 : value} readOnly/>
                <button className={`selectQuantity-controls-btn more ${itemStock === 0 ? 'disabled' : ''}`} onClick={increment} disabled= {itemStock === 0}>+</button>
            </div>
            <div className={`selectQuantity-stockLimitAlert ${insufficientStock && itemStock !== 0 ? 'activeAlert' : ''}`}>
                <p>Stock insuficiente</p>
            </div>
            <AddToCartBtn stock={itemStock} handleOnAdd={onAdd}/>
        </div>
    )
}