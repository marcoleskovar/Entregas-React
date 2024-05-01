//* STYLE: _itemListContainer.scss

import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({products}) => {
    const {id} = useParams()
    const [category, setCategory] = useState([])

    useEffect (() => {
        const categoryProducts = id ? products.filter (p => p.category === id) : products
        setCategory (categoryProducts)
    }, [id])

    return (
        <div className="itemListContainer">
            <ItemList prod= {category}/>
        </div>
    )
}