//* STYLE: _itemListContainer.scss

import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
    const prod = [
        {id: 1, title: 'T1 Aguja', price: 1000, stock: 13, description: 'TEL-Dry T1 Aguja Granel', image: '/images/products/T1_aguja.jpg'},
        {id: 2, title: 'T1 Mecha', price: 1000, stock: 28, description: 'TEL-Dry T1 Mecha Granel', image: '/images/products/T1_mecha.jpg'},
        {id: 3, title: 'T2 Aguja', price: 3500, stock: 93, description: 'TEL-Dry T2 Aguja Granel', image: '/images/products/T2_aguja.jpg'},
        {id: 4, title: 'T2 Mecha', price: 3000, stock: 6, description: 'TEL-Dry T2 Mecha Granel', image: '/images/products/T2_mecha.jpg'},
        {id: 5, title: 'T3 Aguja', price: 1100, stock: 31, description: 'TEL-Dry T3 Aguja Granel', image: '/images/products/T3_aguja.jpg'},
        {id: 6, title: 'T3 Mecha', price: 1100, stock: 70, description: 'TEL-Dry T3 Mecha Granel', image: '/images/products/T3_mecha.jpg'},
    ]

    return (
        <div className="itemListContainer">
            <ItemList prod= {prod}/>
        </div>
    )
}