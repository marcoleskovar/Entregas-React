import './style/App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { MainImage } from './components/MainImage'

function App() {
  return (
    <div className='main'>
      <Navbar />
      <ItemListContainer first={'¿Tornillos? '} second={'Gamma'}/>
      <MainImage />
    </div>
  )
}

export default App
