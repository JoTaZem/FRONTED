const Tarjeta=(persona)=>{
    return(
        <div className="card w-25 mt-2" style={{margin:"0 auto"}}>
            <div className="card-header">
                <p className="text-center fw-bold">{persona.nombre}</p>
            </div>
            <div className="card-body text-center">
                <img src={persona.foto} width="200" height="200" />
            </div>
            <div className="card-footer">
                <p className="text-center fw-bold">Edad: {persona.edad} años</p>
            </div>
        </div>
    )
}

export default Tarjeta