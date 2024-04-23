//* STYLE: _navegation.scss

const ProductList = () => {
    return (
        <ul className="navigation-itemList-item-productList" id="navBarProductsList">
            <li className="navigation-itemList-item-productList-item">
                <a href="#">Tornillos</a>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <a href="#">Tarugos</a>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <a href="#">Tuercas</a>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <a href="#">Bulones</a>
            </li>
            <li className="navigation-itemList-item-productList-item">
                <a href="#">Arandelas</a>
            </li>
        </ul>
    )
}


export const Navegation = () => {
    return (
        <div className="navigation">
            <ul className="navigation-itemList">
                <li className="navigation-itemList-item" id="navBarProductsItem">
                    <a className="navigation-itemList-item-link" href="#">
                        Productos
                        <svg className="navigation-itemList-item-link-svg bi bi-caret-down-fill" id="productsDropdownArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </a>
                    <ProductList />
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