//* STYLE: _cartInfo.scss

import { CreateOrder } from "./CreateOrder"

export const CartInfo = ({totalQuantity, totalPrice}) => {
    return (
        <div className="cartInfo">
            <div className="cartInfo-detail">
                <h4 className="cartInfo-detail-totalQuantity">Total de productos: {totalQuantity}</h4>
                <h2 className="cartInfo-detail-totalPrice">Total: ${totalPrice}</h2>
            </div>
            <CreateOrder totalPrice={totalPrice}/>
        </div>
    )
}