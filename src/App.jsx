import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { DynamicText } from './components/landing/DynamicText'
import { ItemListContainer } from './components/items/ItemListContainer'
import { ItemDetail } from './components/items/ItemDetail'
import {products} from './products.js'
import './style/css/main.css'

function App () {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <DynamicText />
              <ItemListContainer products={products}/>
            </>
          }/>
          <Route path='/category/:id' element={<ItemListContainer products={products}/>}/>
          <Route path='/category' element={<ItemListContainer products={products}/>}/>
          <Route path='/item/:id' element={<ItemDetail products={products}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App