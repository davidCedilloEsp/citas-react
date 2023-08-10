import './Navbar.css'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg ">
             
            <div className="container-fluid">
                <a className="navbar-brand" href="#">hidalgo.gob.mx</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="#">GOBIERNO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TRAMITES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TRANSPARENCIA </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">PAGOS  </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">BUZÓN CIUDADANO  </a>
                        </li>

                        <li className="nav-item">
                            
                            <a className="nav-link" href="#" id='btnMas'>Mas <i className="bi bi-caret-down"></i></a>
                        </li>
                    </ul>

                    <span className="navbar-text">
                        <a className="nav-link" href="#">Tuzobús  </a>
                    </span>
                </div>
            </div>

            <div className="target-place">
                <div className="row">
                    <div className="col-md-12" id='masPlace'>

                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar