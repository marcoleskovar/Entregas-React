import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { DynamicText } from './components/landing/DynamicText'
import { ItemListContainer } from './components/items/ItemListContainer'
import { ItemDetail } from './components/items/ItemDetail'
import {products} from './products.js'
import './style/css/main.css'
import { CartContextProvider } from './components/context/CartContex.jsx'
import { ProductsContextProvider } from './components/context/ProductsContext.jsx'

function App () {
  return (
    <>
      <ProductsContextProvider products={products}>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={
                <>
                  <DynamicText />
                  <ItemListContainer products={products}/>
                </>
              }/>
              <Route path='/category/:id' element={<ItemListContainer/>}/>
              <Route path='/category' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetail/>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  )
}

export default App