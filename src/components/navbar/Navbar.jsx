//* STYLE: _navbar.scss

import { CartWidget } from "./CartWidget"
import { SearchBar } from "./SearchBar"
import { Navegation } from "./Navegation"
import { Link } from "react-router-dom"
import { BuysWidget } from "./BuysWidget"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-mainContainer">
                <div className="navbar-mainContainer-logoContainer">
                    <Link to={"/"} className="navbar-mainContainer-logoContainer-link">
                        <img className="navbar-mainContainer-logoContainer-link-logoImage" src="/images/full_logo.webp" alt="logo navbar" />
                    </Link>
                </div>
                <Navegation />
                <div className="navbar-mainContainer-searchAndCart">
                    <SearchBar />
                    <BuysWidget />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}