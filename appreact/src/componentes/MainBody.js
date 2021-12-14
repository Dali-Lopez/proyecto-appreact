import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class MainBody extends Component {
    render() {
        return (
            // <body>
            //     <div className="container">
            //         <h1 className="d-flex justify-content-center align-items-center h-100">¿Comer sano?</h1>

            //         <br />
            //         <p className="text-justify">Los niños de 6 a 13 años necesitan especialmente una ingesta saludable de nutrientes para apoyar su rápido crecimiento. Al igual que el resto del cuerpo, nuestros dientes también necesitan alimentos saludables para mantenerse saludables. Evite los alimentos con alto contenido de azúcar, como los dulces. Estos alimentos aumentan el riesgo de caries. En su lugar, elija alimentos nutritivos como frutas, verduras, cereales integrales, proteínas magras y productos lácteos bajos en grasa..</p>
            //         <p className="text-justify">Manténgase bien hidratado bebiendo al menos 10 tazas (8 onzas) de agua todos los días. Elija agua potable segura sobre el agua embotellada. El agua del grifo puede contener un mineral llamado fluoruro que ayuda a prevenir la caries denta</p>

            //         <p className="text-justify">Puede obtener más información sobre la seguridad del agua del grifo y los datos de flúor llamando a su junta local de aguas o visitándolos en línea.</p>
            //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55JL4kKS19UfPUFR1TcSvsWHpiETBQMNbc1vaCPwYFjPMkZD0gt7lJ6qx5OF4UFGTOvQ&usqp=CAU" width="200px" height="200px" alt=""></img>
            //             <br/>
            //         <div class="dropdown">
            //             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                 Mas información sobre   
            //             </button>
            //             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                 <a class="dropdown-item" href="#">Action</a>
            //                 <a class="dropdown-item" href="#">Another action</a>
            //                 <a class="dropdown-item" href="#">Something else here</a>
            //             </div>
            //         </div>
            //         <br/>
            //         <h2>¿Porque es importante una alimentación?</h2>
            //         <p>Existe evidencia sólida que demuestra que comer una dieta saludable puede reducir su riesgo de obesidad y enfermedades tales como diabetes, cardiopatía, accidentes cerebrovasculares, osteoporosis y algunos tipos de cáncer.</p>
            //         <p>Los nutrientes más importantes ven su dieta incluyen lo siguiente:</p>
            //         <table className="table table-striped">
            //             <thead>
            //                 <tr>
            //                     <th>Nombre</th>
            //                     <th>Definición</th>

            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 <tr>
            //                     <td>Carbohidratos</td>
            //                     <td>estas son otra fuente de energía y son esenciales para el crecimiento y la restauración de todos los tejidos en su cuerpo.</td>


            //                 </tr>
            //                 <tr>
            //                     <td>Proteínas</td>
            //                     <td>estos le dan energía.</td>

            //                 </tr>
            //                 <tr>
            //                     <td>Grasas</td>
            //                     <td>Son una fuente muy concentrada de energía y también desempeñan otras funciones </td>

            //                 </tr>
            //                 <tr>
            //                     <td>Vitaminas y minerales </td>
            //                     <td>Las vitaminas y minerales son importantes para mantener su cuerpo sano y en buen funcionamiento.</td>

            //                 </tr>
            //             </tbody>
            //         </table>
            //         <h2>Una dieta baleanciada</h2>
            //         <p>Necesita comer alimentos variados para obtener todos los nutrientes y fibras que su cuerpo necesita. Los cinco grupos principales de alimentos son: </p>
            //         <ol>
            //             <li>Alimentos con almidón, incluidos el pan, las pastas, el arroz y las papas </li>
            //             <li>Frutas y verduras </li>
            //             <li>Leche y otros productos lácteos </li>
            //             <li>Carne, pescado, huevos, frijoles y otras fuentes no lácteas de proteínas </li>

            //         </ol>
            //         <p>Comer la variedad adecuada de alimentos de estos grupos le proveerá a su cuerpo todo lo que necesita para mantenerse saludable.</p>

            //     </div>



            // </body>        

            <body className="d-flex flex-column h-100">
                <div className="container px-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Una vida saludable</h1>
                            <p className="lead fw-normal text-muted mb-0">La Organización Mundial de la Salud (OMS) define la salud como “un estado de completo bienestar físico, mental y social”,
                                lo que supone que este concepto va más allá de la existencia o no de una u otra enfermedad. En consecuencia, más que de una vida sana hay que hablar de un estilo de vida
                                saludable del que forman parte la alimentación, el ejercicio físico, la prevención de la salud, el trabajo, la relación con el medio ambiente y la actividad social.</p>

                        </div>
                        <div className="row gx-5">
                            <div className="col-lg-6">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-3 mb-3" src="http://dummy-images.com/food/dummy-600x400-FrozenRaspberry.jpg" alt="..." />
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Comer saludable</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-3 mb-3" src="http://dummy-images.com/sport/dummy-600x400-RacingBike.jpg" alt="..." />
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Hacer ejercicio</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-3 mb-3" src="http://dummy-images.com/objects/dummy-600x400-Stopwatch.jpg" alt="..." />
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Tener horarios de comida fijos</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-3 mb-3" src="http://dummy-images.com/food/dummy-600x400-Chocolate-plain.jpg" alt="..." />
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Reducir el consumo de grasas</a>
                                </div>
                            </div>

                            <div className="text-center mb-5    ">
                                <p className="lead fw-normal text-muted mb-0"> Llevar una dieta sana a lo largo de la vida ayuda a prevenir la malnutrición en todas
                                    sus formas, así como diferentes enfermedades no transmisibles y trastornos. Sin embargo, el aumento de la producción de alimentos procesados,
                                    la rápida urbanización y el cambio en los estilos de vida han dado lugar a un cambio en los hábitos alimentarios. Actualmente, las personas
                                    consumen más alimentos hipercalóricos, grasas, azúcares libres y sal/sodio; por otra parte, muchas personas no comen suficientes frutas, verduras y fibra dietética, como por ejemplo cereales integrales.</p>
                            </div>
                        </div>

                    </div>

                </section>



            </body>

        );
    }
}
export default MainBody;