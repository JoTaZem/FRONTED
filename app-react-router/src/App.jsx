
import Menu from "./componentes/Menu"
import Home from "./componentes/Home"
import About from "./componentes/About"
import Contact from "./componentes/Contact"
import PiePagina from "./componentes/PiePagina"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Menu/>
      <div style={{minHeight:"650px"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
      </div>
      <PiePagina/>
    </>
  )
}

export default App
