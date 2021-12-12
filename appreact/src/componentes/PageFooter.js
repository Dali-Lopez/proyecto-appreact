import { Component } from 'react';

class PageFooter extends Component {
    render() {
        return (
            <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                        <h6>
                            Comer es una necesidad, pero comer inteligentemente es un arte
                        </h6>
                    </section>
                </div>
                <div class="text-center p-3">
                    © 2020 Copyright: Dietas y Salud
                </div>
            </footer>
            // <footer>
            //     <div className="mt-5 p-4 bg-dark text-white text-center">
            //         <p>Todos los derechos reservados</p>
            //     </div>
            // </footer>
        );
    }
}
export default PageFooter;