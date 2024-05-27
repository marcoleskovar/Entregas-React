import { LoadingContextProvider } from './components/context/LoadingContext.jsx'
import { ProductsContextProvider } from './components/context/ProductsContext.jsx'
import { CartContextProvider } from './components/context/CartContex.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { DynamicText } from './components/landing/DynamicText'
import { ItemListContainer } from './components/items/ItemListContainer'
import { ItemDetail } from './components/items/ItemDetail'
import { CartContainer } from './components/cart/CartContainer.jsx'
import { OrdenesView } from './components/OrdenesView.jsx'
import { OrderView } from './components/OrderView.jsx'
import './style/css/main.css'

function App () {
  return (
    <>
      <LoadingContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={
                  <>
                    <DynamicText />
                    <ItemListContainer/>
                  </>
                }/>
                <Route path='/category/:id' element={<ItemListContainer/>}/>
                <Route path='/category' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetail/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/ordenes' element={<OrdenesView/>}/>
                <Route path='/ordenes/:id' element={<OrderView/>}/>
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </ProductsContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export default App