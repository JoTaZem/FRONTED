import Menu from "./paginas/Menu"
import Aprendices from "./paginas/Aprendices"
import Programas from "./paginas/Programas"
import AcercaDe from "./paginas/AcercaDe"
import PiePagina from "./paginas/PiePagina"
import {Routes,Route} from "react-router-dom"
const App = () => {
  
  return (
    <>
      <Menu/>
      <div style={{minHeight:"400px"}}>
        <Routes>
          <Route path="/" element={<Aprendices/>}></Route>
          <Route path="/programas" element={<Programas/>}></Route>
          <Route path="/acercaDe" element={<AcercaDe/>}></Route>
        </Routes>
      </div> 
      <PiePagina/>
    </>
  )
}

export default App
