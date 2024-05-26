import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useLoadingContext } from "./context/LoadingContext"

export const OrdenesView = () => {
    const [orders, setOrders] = useState ([])
    const {setLoadingState} = useLoadingContext()

    useEffect (() => {
        const fetchOrders = async () => {
            setLoadingState (true)
            const db = getFirestore()
            const ordersCollection = collection (db, 'orders')

            const snapshot = await getDocs (ordersCollection)
            if (snapshot.size > 0) {
                setOrders (snapshot.docs.map (o => ({id: o.id, ...o.data()})))
            }
            setLoadingState (false)
        }

        fetchOrders ()
    }, [])

    return (
        <>
            {orders.map(o => (
                <div key={o.id}>
                    <h1>{o.id}</h1>
                    <img src={o.items[0].img} alt="" />
                    <p>{o.total}</p>
                </div>
            ))}
        </>
    )
}