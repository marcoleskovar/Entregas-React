//* STYLE: _ordenesView.scss

import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useLoadingContext } from "./context/LoadingContext"
import { Link } from "react-router-dom"

export const OrdenesView = () => {
    const [orders, setOrders] = useState ([])
    const {setLoadingState} = useLoadingContext()

    useEffect (() => {
        const fetchOrders = async () => {
            setLoadingState (true)
            const db = getFirestore()
            const ordersCollection = collection (db, 'orders')
            const queryCollection = query (
                ordersCollection,
                orderBy ('date', 'desc')
            )
            const snapshot = await getDocs (queryCollection)
            if (snapshot.size > 0) {
                setOrders (snapshot.docs.map (o => ({id: o.id, ...o.data()})))
            }
            setLoadingState (false)
        }

        fetchOrders ()
    }, [])

    const renderTitles = (items) => {
        const titles = items.map (i => i.title)
        if (titles.length >= 4) return `${titles.slice(0, 3).join(', ')} y más`
        else if (titles.length === 3) return `${titles.slice(0, 2).join(', ')} y ${titles[2]}`
        else if (titles.length === 2) return `${titles.join(' y ')}`
        else if (titles.length === 1) return titles[0]
        return ''
    }

    return (
        <>
            {Object.keys(orders).length > 0 ? (
                <div className="ordersContainer">
                    <ul className="ordersContainer-list">
                        {orders.map(o => (
                            <li key={o.id} className="ordersContainer-list-item">
                                <Link className="ordersContainer-list-item-link" to={o.id}>
                                    <div className="ordersContainer-list-item-link-img">
                                        <img src={o.items[0].img} alt="" />
                                    </div>
                                    <div className="ordersContainer-list-item-link-info">
                                        <h3 className="ordersContainer-list-item-link-info-title">{renderTitles(o.items)}</h3>
                                        <h2 className="ordersContainer-list-item-link-info-total">${o.total}</h2>
                                        <p className="ordersContainer-list-item-link-info-date">{o.date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="ordersContainer empty">
                    <h1 className="empty-text">No tienes compras aun</h1>
                    <button className="empty-btn">
                    <Link to={'/'} className="empty-btn-link">
                        Ver Productos
                    </Link>
                </button>
                </div>
            )
            }
        </>
    )
}