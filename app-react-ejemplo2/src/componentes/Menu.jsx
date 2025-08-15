import { Link } from "react-router-dom"

const Menu=()=>{
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./imagenes/logoSena.png" width={50} alt="" /></a>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li classNameName="nav-item ms-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="about">about</Link> 
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/contact">Contact</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu