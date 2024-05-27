//* STYLE: _orderView.scss

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLoadingContext } from "./context/LoadingContext"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const OrderView = () => {
    const [order, setOrder] = useState ({})
    const {id} = useParams ()
    const {setLoadingState} = useLoadingContext()
    
    useEffect (() => {
        const fetchOrder = async () => {
            setLoadingState (true)
            const db = getFirestore ()
            const orderDoc = doc (db, 'orders', id)

            const snapshot = await getDoc (orderDoc)
            if (snapshot.exists()) {
                setOrder ({id: snapshot.id, ...snapshot.data()})
                setLoadingState (false)
            }
            setLoadingState (false)
        }
        fetchOrder ()
    }, [])

    return (
        <>
            {Object.keys(order).length > 0 ? (
                <div className="orderContainer">
                    <div className="orderContainer-detail">
                        <div className="orderContainer-detail-buyer">
                            <p className="orderContainer-detail-buyer-label">Comprador:</p>
                            <ul className="orderContainer-detail-buyer-list">
                                <li className="orderContainer-detail-buyer-list-item">
                                    Nombre:
                                    <span className="orderContainer-detail-buyer-list-item-span"> {order.buyer.name}</span>
                                </li>
                                <li className="orderContainer-detail-buyer-list-item">
                                    Email:
                                    <span className="orderContainer-detail-buyer-list-item-span"> {order.buyer.email}</span>
                                </li>
                                <li className="orderContainer-detail-buyer-list-item">
                                    Celular:
                                    <span className="orderContainer-detail-buyer-list-item-span"> {order.buyer.phone}</span>
                                </li>
                            </ul>
                        </div>
                        <p className="orderContainer-detail-date">
                            Fecha de compra:
                            <span className="orderContainer-detail-date-span"> {order.date}</span>
                        </p>
                        <p className="orderContainer-detail-id">
                            ID de compra: 
                            <span className="orderContainer-detail-id-span">{order.id}</span>
                        </p>
                        <h2 className="orderContainer-detail-total">
                            Precio total:
                            <span className="orderContainer-detail-total-span"> ${order.total}</span>
                        </h2>
                        {order.items.map (p => (
                            <div className="orderContainer-detail-products">
                                <div key={p.id} className="orderContainer-detail-products-img">
                                    <img src={p.img}/>
                                </div>
                                    <ul className="orderContainer-detail-products-list">
                                        <li className="orderContainer-detail-products-list-item">
                                            Producto: 
                                            <span>
                                                {p.title}
                                            </span>
                                        </li>
                                        <li className="orderContainer-detail-products-list-item">
                                            Precio por unidad:
                                            <span>
                                                ${p.price}
                                            </span>
                                        </li>
                                        <li className="orderContainer-detail-products-list-item">
                                            Cantidad:
                                            <span>
                                                {p.quantity}
                                            </span>
                                        </li>
                                        <li className="orderContainer-detail-products-list-item">
                                            Cantidad X precio:
                                            <span>
                                                ${p.price * p.quantity}
                                            </span>
                                        </li>
                                    </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ) : <></>}
        </>
    )
}