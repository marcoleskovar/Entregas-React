//* STYLE: _itemListContainer.scss

import { useContext, useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

export const ItemListContainer = () => {
    const products = useContext (ProductsContext)
    const {id} = useParams()
    const [category, setCategory] = useState([])

    useEffect (() => {
        const categoryProducts = id ? products.filter (p => p.category === id) : products
        setCategory (categoryProducts)
    }, [id, products])
    
    return (
        <div className="itemListContainer">
            <ItemList prod= {category}/>
        </div>
    )
}