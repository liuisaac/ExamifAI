import { tesselation } from './assets'
import { Hero, Mission, Anvil, NavbarH } from './components'
import './index.css'
function App() {
  return (
    <div className='bg-black overflow-hidden'>
    <div>
      <NavbarH />
    </div>
    <div className='w-screen h-screen bg-black bg-[url("../assets/tesselation.png")]'>
    <img src={tesselation} className='w-full h-full absolute'/>
      <Hero />
    </div>
    <div className='w-screen h-screen bg-gray-600'>
      <Mission />
    </div>
    <div className='w-screen h-screen bg-black '><Anvil/></div>
    </div>
  )
}

export default App
