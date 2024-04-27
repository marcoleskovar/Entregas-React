import { Navbar } from './components/navbar/Navbar'
import { DynamicText } from './components/DynamicText'
import { AddToCartBtn } from './components/cart/AddToCartBtn'
//import { ItemListContainer } from './components/ItemListContainer'
//import { MainImage } from './components/MainImage'
import './style/css/main.css'

function App () {
  return (
    <div>
      <Navbar />
      <DynamicText />
      <AddToCartBtn />
    </div>
  )
}

export default App