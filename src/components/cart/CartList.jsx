//* STYLE: _cartList.scss

import { Link } from "react-router-dom"

export const CartList = ({cartList, removeItem}) => {
    return (
        <div className="cartListContainer">
            <ul className="cartListContainer-list">
                {cartList.map (p => (
                    <li key={p.id} className="cartListContainer-list-item">
                        <Link to={`/item/${p.id}`} className="cartListContainer-list-item-link">
                            <div className="cartListContainer-list-item-link-image">
                                <img src={p.mainImg} alt="" />
                            </div>
                            <div className="cartListContainer-list-item-link-info">
                                <h3 className="cartListContainer-list-item-link-info-title">{p.title} ({p.quantity})</h3>
                                <h2 className="cartListContainer-list-item-link-info-price">${p.price}</h2>
                                <p className="cartListContainer-list-item-link-info-description">{p.description}</p>
                            </div>
                            <div className="cartListContainer-list-item-link-delete">
                                <svg onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                     removeItem(p.id)}
                                     } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}