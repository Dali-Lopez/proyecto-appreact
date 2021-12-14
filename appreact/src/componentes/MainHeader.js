import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Dietas from './pages/Dietas.js'
import FormularioProductos from './pages/consultasbd/FormularioProductos'
import Eliminar from './pages/consultasbd/Eliminar.js';
import fondoheader from '../img/comidafondo.jpg'
import logosvg from '../img/logoNutricion.svg'
// hoy 13 de dic
class MainHeader extends Component {
    render() {
        return (
            <div>
                <head>
                    <title>Dietas</title>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </head>
                <div className="p-5 text-center bg-primary">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">¡Cuida tu salud!</h1>
                                <h3 className="mb-4">Elije la mejor dieta para tu vida</h3>
                                {/* <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button" rel="nofollow noreferrer" target="_blank" alt="">
                                    Start tutorial
                                </a>
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    href="https://mdbootstrap.com/docs/standard/"
                                    target="_blank"
                                    role="button"
                                    alt="" rel="noreferrer">
                                    Download MDB UI KIT
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Router>
                    <nav className="navbar navbar-expand-xl  bg-dark navbar-dark sticky-top">
                    {/* <nav className="navbar navbar-expand-xl  bg-primary navbar-dark sticky-top"> */}
                    {/* <nav className="navbar navbar-expand-sm  bg-primary navbar-dark sticky-top "> */}
                        <div className="collaps navbar-collapse" >
                        {/* <div className="container-fluid" > */}
                            <a className="navbar-brand" alt="Inicio">
                                <img src={logosvg} width="50px" height="50px" alt=""></img>
                            </a>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <h5>
                                        <Link className="nav-link text-white" to="/">Inicio</Link>
                                    </h5>
                                </li>
                                <li className="nav-item active">
                                    <h5>
                                        <Link className="nav-link text-white" to="Dietas">Dietas</Link>
                                    </h5>
                                </li>

                                <li className="nav-item active">
                                    <h5>
                                        <Link className="nav-link text-white" to="FormularioProductos">Agregar una dieta</Link>
                                    </h5>
                                </li>

                                <li className="nav-item active">
                                    <h5>
                                        <Link className="nav-link text-white" to="Eliminar">Editar dietas</Link>
                                    </h5>
                                </li>
                            </ul>

                            {/* <Link className="nav-link" to="/">Inicio</Link> */}

                            {/* <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="Dietas">Dietas</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="FormularioProductos">Agregar una dieta</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="Eliminar">Editar dietas</Link>
                                </li>
                            </ul> */}
                        </div>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="Dietas" element={<Dietas />}></Route>
                        <Route exact path="FormularioProductos" element={<FormularioProductos />}></Route>
                        <Route exact path="Eliminar" element={<Eliminar />}></Route>
                    </Routes>
                </Router>

                <div class="container-fluid">

                </div>
                {/* <div class="container-fluid mt-3">
                <h3>Sticky Navbar</h3>
                <p>A sticky navigation bar stays fixed at the top of the page when you scroll past it.</p>
                <p>Scroll this page to see the effect.<strong>Note: </strong> sticky-top does not work in IE11 and earlier.</p>
            </div>
            <body>
                <Router>
                        <nav class="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
                            <div className= "container-fluid">
                            <a className="navbar-brand" alt="Inicio">
                                <img src={logosvg} width="40px" height="40px" alt=""></img>
                            </a>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="Dietas">Dietas drogasas</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="FormularioProductos">FormularioProductos</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="Eliminar">Editar dietas</Link>
                                </li>

                            </ul>
                        </div>    
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="Dietas" element={<Dietas />}></Route>
                        <Route exact path="FormularioProductos" element={<FormularioProductos />}></Route>
                        <Route exact path="Eliminar" element={<Eliminar />}></Route>
                    </Routes>
                </Router>
                
            </body> */}
                {/* <nav class="navbar navbar-expand-sm bg-primary navbar-dark fixed-top sticky-top"> */}
            </div>
        );
    }
}
export default MainHeader;
