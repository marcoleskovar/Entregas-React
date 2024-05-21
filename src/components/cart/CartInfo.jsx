//* STYLE: _cartInfo.scss

export const CartInfo = ({totalQuantity, totalPrice}) => {
    return (
        <div className="cartInfo">
            <div className="cartInfo-detail">
                <h4 className="cartInfo-detail-totalQuantity">Total de productos: {totalQuantity}</h4>
                <h2 className="cartInfo-detail-totalPrice">Total: ${totalPrice}</h2>
            </div>
            <div className="cartInfo-buy">
                <button className="cartInfo-buy-btn">
                    Comprar Carrito
                    <svg xmlns="http://www.w3.org/2000/svg" className="cartWidgetContainer-link-svg bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}