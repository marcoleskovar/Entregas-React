//* STYLE: _productQuantity.scss

import { useState } from "react"

export const ProductQuantity = () => {
    const [value, setValue] = useState (0)
    const increment = () => {setValue (value + 1)}
    const decrease = () => {if (value > 0) setValue (value - 1)}

    return (
        <div className="productQuantity">
            <button className="productQuantity-btn less" onClick={decrease}>-</button>
            <input className="productQuantity-input" type="number" value={value} readOnly/>
            <button className="productQuantity-btn more" onClick={increment}>+</button>
        </div>
    )
}