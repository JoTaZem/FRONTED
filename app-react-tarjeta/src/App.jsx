import Tarjeta from './componentes/Tarjeta.jsx'

const App=()=>{
    const personas=[
        {"nombre":"Ana Gomez","edad":25,"foto":"./imagenes/foto1.jpg"},
        {"nombre":"Juan Perez","edad":30,"foto":"./imagenes/foto2.jpg"},
        {"nombre":"Luis Martinez","edad":28,"foto":"./imagenes/foto3.jpg"}
    ]
    return(
        <>
            <h1 className="text-center fw-bold">LISTA DE PERSONAS</h1>
            {
                personas.map(persona=>(
                    <Tarjeta nombre={persona.nombre} edad={persona.edad} foto={persona.foto} />
                ))
            }
        </>
    )
}

export default App
