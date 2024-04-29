import { Navbar } from './components/navbar/Navbar'
import { DynamicText } from './components/landing/DynamicText'
import { ProductQuantity } from './components/cart/ProductQuantity'
import { ItemListContainer } from './components/items/ItemListContainer'
import './style/css/main.css'

function App () {
  return (
    <div>
      <Navbar />
      <DynamicText />
      <ItemListContainer />
      <ProductQuantity stock={7} initial={1}/>
    </div>
  )
}

export default App