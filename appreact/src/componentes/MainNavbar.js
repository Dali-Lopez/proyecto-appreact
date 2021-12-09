import { Component } from 'react';

class MainNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="www.google.com">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Dietas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Analisis nutricio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="www.google.com">Software</a>
                        </li>
                    </ul>
                </div>
            </nav>
            );
    }
}
export default MainNavbar;