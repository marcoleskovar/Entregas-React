import '../style/Navbar.css'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <nav className="navbar navbar-expand-lg">
                <div className="menuContainer container-fluid">
                    <a className="logo navbar-brand" href="#">
                        <img className='logoImg' src="/images/full_logo.webp" alt="logo_empresa" />
                    </a>
                    <button className="menuBtn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menutBtnImg navbar-toggler-icon"></span>
                    </button>
                    <div className="itemContainer collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="itemList navbar-nav">
                            <li className="item nav-item">
                                <a className="itemLink nav-link active" aria-current="page" href="#">Contactanos</a>
                            </li>
                            <li className="item nav-item">
                                <a className="itemLink nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="item nav-item dropdown">
                                <a className="itemLink nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                                <ul className="itemDropdownContainer dropdown-menu">
                                    <li className='itemDropdown'><a className="itemDropdownLink dropdown-item" href="#">Tornillos</a></li>
                                    <li className='itemDropdown'><a className="itemDropdownLink dropdown-item" href="#">Tarugos</a></li>
                                    <li className='itemDropdown'><a className="itemDropdownLink dropdown-item" href="#">Cintas Tramadas</a></li>
                                </ul>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    )
}