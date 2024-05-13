//* STYLE: _itemDetail.scss

import { useContext, useEffect, useState } from "react"
import { ProductQuantity } from "../cart/ProductQuantity"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

export const ItemDetail = () => {
    const products = useContext (ProductsContext)
    const {id} = useParams ()
    const [prod, setProd] = useState ([])

    useEffect (() => {
        new Promise ((res, rej) => {
            const findProduct = id ? products.find (p => p.id === parseInt (id)) : false
            !findProduct ? rej (`Product ID not found: ${id}`) : res (findProduct)
        })
            .then (result => setProd (result))
            .catch (error => console.log(error))
    }, [])
    
    return (
        <div className="itemDetailContainer">
            <section className="itemDetailContainer-mainSection">
                <section className="itemDetailContainer-mainSection-images">
                    <div className="itemDetailContainer-mainSection-images-side">
                        <ul className="itemDetailContainer-mainSection-images-side-list">
                            <li className="itemDetailContainer-mainSection-images-side-list-image">
                                <img src={prod.mainImg}></img>
                            </li>
                            <li className="itemDetailContainer-mainSection-images-side-list-image">
                                <img src={prod.mainImg}></img>
                            </li>
                            <li className="itemDetailContainer-mainSection-images-side-list-image">
                                <img src={prod.mainImg}></img>
                            </li>
                            <li className="itemDetailContainer-mainSection-images-side-list-image">
                                <img src={prod.mainImg}></img>
                            </li>
                        </ul>
                    </div>
                    <div className="itemDetailContainer-mainSection-images-main">
                        <img src={prod.mainImg}></img>
                    </div>
                </section>
                <section className="itemDetailContainer-mainSection-selection">
                    <div className="itemDetailContainer-mainSection-selection-productName">
                        <h1 className="itemDetailContainer-mainSection-selection-productName-name">{prod.title}</h1>
                    </div>
                    <div className="itemDetailContainer-mainSection-selection-details">
                        <div className="itemDetailContainer-mainSection-selection-details-opts">
                            <span>Medida:</span>
                            <select name="size">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="itemDetailContainer-mainSection-selection-details-opts">
                            <span>Pack:</span>
                            <select name="packType">
                                <option value="Granel">Granel (1000 u)</option>
                                <option value="Estuche">Estuche (100 u)</option>
                            </select>
                        </div>
                        <div className="itemDetailContainer-mainSection-selection-details-confirm">
                            <ProductQuantity stock={prod.stock} initial={1} prod={prod}/>
                        </div>
                    </div>
                </section>
            </section>
            <section className="itemDetailContainer-descriptionSection">
                <p className="itemDetailContainer-descriptionSection-desc">{prod.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi soluta ducimus porro dolores, aut optio asperiores in ab quae eaque, accusantium vel atque voluptatibus voluptas incidunt cum doloribus, labore at. {prod.description}</p>
            </section>
        </div>
    )
}