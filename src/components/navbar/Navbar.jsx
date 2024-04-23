//* STYLE: _navbar.scss

import { CartWidget } from "./CartWidget"
import { SearchBar } from "./SearchBar"
import { Navegation } from "./Navegation"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-mainContainer">
                <div className="navbar-mainContainer-logoContainer">
                    <a className="navbar-mainContainer-logoContainer-link" href="#">
                        <img className="navbar-mainContainer-logoContainer-link-logoImage" src="/images/full_logo.webp" alt="logo navbar" />
                    </a>
                </div>
                <Navegation />
                <div className="navbar-mainContainer-searchAndCart">
                    <SearchBar />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}