//* STYLE: _cartInfo.scss

import { useContext, useState } from "react"
import { CartContext } from "../context/CartContex"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import moment from "moment"

export const CreateOrder = ({totalPrice}) => {
    const {cartList, clear} = useContext (CartContext)

    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [phone, setPhone] = useState ('')
    const [orderId, setOrderId] = useState ('')
    const [invalidFields, setInvalidFields] = useState (false)
    const [invalidMail, setInvalidMail] = useState (false)

    const handleInputChange = () => {
        setInvalidFields (false)
    }

    const createNewOrder = () => {       

        if (!name || !email || !phone) {
            console.log('entra 1');
            setInvalidFields (true)
            return
        }

        if (!email.includes('@') || !email.includes('.com')) {
            console.log('entra 2');
            setInvalidMail(true)
            return
        }
        setInvalidMail (false)
            
        const buyer = {name: name, phone: phone, email: email}
        const items = cartList.map (p => ({id: p.id, title: p.title, quantity: p.quantity, price: p.price, img: p.mainImg}))
        const date = moment (new Date ()).format ('DD/MM/YYYY - HH:mm')
        const order = {buyer: buyer, items: items, date: date ,total: totalPrice}

        const db = getFirestore ()
        const orderCollection = collection (db, 'orders')
        addDoc (orderCollection, order)
            .then (data => {
                setOrderId (data.id)
                clear()
            })
    }

    return (
        <>
            <div className="cartInfo-order">
                <div className="cartInfo-order-inputContainer">
                    <span className="cartInfo-order-inputContainer-label">Nombre y Apellido</span>
                    <input onChange={handleInputChange} onInput={e => setName(e.target.value)} className="cartInfo-order-inputContainer-input" type="text" required/>
                </div>
                <div className="cartInfo-order-inputContainer">
                    <span className="cartInfo-order-inputContainer-label">Mail</span>
                    <input onChange={handleInputChange} onInput={e => setEmail(e.target.value)} className="cartInfo-order-inputContainer-input" type="text" required/>
                </div>
                <div className="cartInfo-order-inputContainer">
                    <span className="cartInfo-order-inputContainer-label">Telefono</span>
                    <input onChange={handleInputChange} onInput={e => setPhone(e.target.value)} className="cartInfo-order-inputContainer-input" type="text" required/>
                </div>
            </div>
            {invalidFields && <p>Debes llenar todos los campos</p>}
            {invalidMail && !invalidFields && <p>Mail inválido</p>}
            <div className="cartInfo-buy">
                <button className="cartInfo-buy-btn" onClick={createNewOrder}>
                    Comprar Carrito
                    <svg xmlns="http://www.w3.org/2000/svg" className="cartWidgetContainer-link-svg bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </button>
            </div>
        </>
    )
}