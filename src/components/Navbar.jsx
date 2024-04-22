//* STYLE: _navbar.scss

import { CartWidget } from "./CartWidget"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-mainContainer">
                <div className="navbar-mainContainer-logoContainer">
                    <a className="navbar-mainContainer-logoContainer-link" href="#">
                        <img className="navbar-mainContainer-logoContainer-link-logoImage" src="/images/full_logo.webp" alt="logo navbar" />
                    </a>
                </div>
                <div className="navbar-mainContainer-itemsContainer">
                    <ul className="navbar-mainContainer-itemsContainer-itemList">
                        <li className="navbar-mainContainer-itemsContainer-itemList-item">Productos</li>
                        <li className="navbar-mainContainer-itemsContainer-itemList-item">Contactanos</li>
                        <li className="navbar-mainContainer-itemsContainer-itemList-item">Sobre Nosotros</li>
                    </ul>
                </div>
                <div className="navbar-mainContainer-searchAndCart">
                    <div className="navbar-mainContainer-searchAndCart-searchContainer">
                        <span className="navbar-mainContainer-searchAndCart-searchContainer-searchIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="navbar-mainContainer-searchAndCart-searchContainer-searchIcon-svg bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </span>
                        <input className="navbar-mainContainer-searchAndCart-searchContainer-searchBar" type="text"/>
                        <span className="navbar-mainContainer-searchAndCart-searchContainer-deleteIcon">
                            <svg className="navbar-mainContainer-searchAndCart-searchContainer-deleteIcon-svg bi bi-x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </span>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}