import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Dietas from './pages/Dietas.js'
import FormularioProductos from './pages/consultasbd/FormularioProductos'
import Eliminar from './pages/consultasbd/Eliminar.js';
import logo from '../img/logoN.png'
import logosvg from '../img/logoNutricion.svg'
class MainHeader extends Component {
    render() {
        return (
            <div>
                <head>
                    <title>Dietas</title>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </head>
                <div class="container-fluid mt-3">
                    <h1>K pazo master</h1>
                </div>

                <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Sticky top</a>
                    </div>
                </nav>

                <div class="container-fluid">
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
                    <p>Some example text.Some example text.Some example text.Some example text.Some example text.</p>
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
