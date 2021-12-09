import React, { Component } from 'react';
import MainHeader from './componentes/MainHeader.js';
//import MainNavbar from './componentes/MainNavbar.js';
import PageFooter from './componentes/PageFooter.js';
import Home from './componentes/pages/Home.js';
import Dietas from './componentes/pages/Dietas.js'
import FormularioProductos from './componentes/pages/consultasbd/FormularioProductos'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import { Container, Header, Message, Table } from 'semantic-ui-react';
// Jejejeje 
import 'bootstrap/dist/css/bootstrap.min.css';
import Eliminar from './componentes/pages/consultasbd/Eliminar.js';

class  App extends Component{
 
  render() {
    return ( 
      <div>
        <MainHeader/>
        <PageFooter/>
      </div>
    );
  }
}
export default App;
{/* <Router>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="Dietas">Dietas</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="FormularioProductos">FormularioProductos</Link>
        </li>

        <li className="nav-item">
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
</Router> */}
        /*
        import logo from './logo.svg';
        import './App.css';

        function App() {
          return(
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        }*/