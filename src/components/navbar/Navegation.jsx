//* STYLE: _navegation.scss

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const ProductList = ({isActive}) => {
    return (
        <ul className={`navigation-itemList-item-productList ${isActive ? 'active' : ''}`}>
            <li className="navigation-itemList-item-productList-item">
                <Link to="/category/autoperforante">Tornillos</Link>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <Link to="/category/tarugos">Tarugos</Link>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <Link to="/category/tuercas">Tuercas</Link>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <Link to="/category/bulones">Bulones</Link>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <Link to="/category/arandelas">Arandelas</Link>
            </li>
        </ul>
    )
}


export const Navegation = () => {
    const [isActive, setIsActive] = useState (false)
    const productListRef = useRef (null)
    const buttonRef = useRef (null)

    useEffect (() => {
        const clickOutside = (e) => {
            if (
                buttonRef.current && 
                !buttonRef.current.contains(e.target) &&
                productListRef.current &&
                !productListRef.current.contains(e.target)
            ) setIsActive (false)
        }

        document.addEventListener('mousedown', clickOutside)

        return () => {document.removeEventListener('mousedown', clickOutside)}
    }, [])

    const toggleActive = () => {
        isActive ? setIsActive (false) : setIsActive (true)
    }

    return (
        <div className="navigation">
            <ul className="navigation-itemList">
                <li className="navigation-itemList-item" onClick={toggleActive}>
                    <a className="navigation-itemList-item-link" href="#" ref={buttonRef}>
                        Productos
                        <svg className={`navigation-itemList-item-link-svg bi bi-caret-down-fill ${isActive ? 'open': ''}`} id="productsDropdownArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </a>
                    <div ref={productListRef}>
                        <ProductList isActive={isActive}/>
                    </div>
                </li>
                <li className="navigation-itemList-item">
                    <a className="navigation-itemList-item-link" href="#">Contactanos</a>
                </li>
                <li className="navigation-itemList-item">
                    <a className="navigation-itemList-item-link" href="#">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
    )
}