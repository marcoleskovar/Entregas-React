//* STYLE: _item.scss

import { useEffect } from "react"
import { useState } from "react"

export const Item = ({productInfo}) => {
    //TODO: SACAR EL TIMEOUT, SOLO REALENTIZA LA CARGA. NO SIRVE DE NADA
    const [visible, setVisible] = useState (false)

    useEffect(() => {
        const timeOut = setTimeout (() => {
            setVisible (true)
            return () => clearTimeout(timeOut)
        }, 2000)
    }, [])

    return (
        <div className="itemCard" style={{display: visible ? 'block' : 'none'}}> {/* //TODO: SACARLE EL STYLE JUNTO CON EL TIMEOUT */}
            <a href="#" className="itemCard-link">
                <div className="itemCard-link-containers top">
                    <div className="itemCard-link-containers-imageContainer">
                        <img className="itemCard-link-containers-imageContainer-image" src={productInfo.image} alt="item image" />
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
                        <div className="itemCard-link-containers-infoContainer-info">
                            <p className="itemCard-link-containers-infoContainer-info-price">${productInfo.price}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}