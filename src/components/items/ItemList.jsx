//* STYLE: _itemList.scss

import { Item } from "./Item"

export const ItemList = ({prod}) => {
    return (
        <div className="itemList">
            {prod.map(p => (
                <Item key={p.id} productInfo={p}/>
            ))}
        </div>
    )
}