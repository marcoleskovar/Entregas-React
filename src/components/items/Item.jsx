//* STYLE: _item.scss

import { Link } from "react-router-dom"

export const Item = ({productInfo}) => {
    return (
        <div className="itemCard">
            <Link to={`/item/${productInfo.id}`} className="itemCard-link">
                <div className="itemCard-link-containers top">
                    <div className="itemCard-link-containers-imageContainer">
                        <img className="itemCard-link-containers-imageContainer-image" src={productInfo.mainImg} alt="item image" />
                    </div>
                </div>
                <div className="itemCard-link-containers bot">
                    <div className="itemCard-link-containers-alertContainer" style={{display: productInfo.stock <= 15 ? 'flex' : 'none'}}>
                        <p>{productInfo.stock > 1 ? `Ultimos ${productInfo.stock} disponibles` : 'Ultimo disponible'}</p>
                    </div>
                    <div className="itemCard-link-containers-infoContainer">
                        <div className="itemCard-link-containers-infoContainer-info">
                            <p className="itemCard-link-containers-infoContainer-info-title">{productInfo.title}</p>
                        </div>
                        <div className="itemCard-link-containers-infoContainer-info">
                            <p className="itemCard-link-containers-infoContainer-info-description">{productInfo.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}