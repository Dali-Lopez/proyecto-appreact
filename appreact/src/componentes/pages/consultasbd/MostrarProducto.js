import { useEffect, useState } from "react"
import logosvg from '../../../img/logoNutricion.svg'
// pruebas de fluid algo asi
export default function MostrarProducto({dietas}){
    const [value, setValue] = useState()
    useEffect(()=>{
        console.log(value)
        if(value){
            fetch(`/deleteRegistro/${value}`,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
        }
    })
    return(
        <div className="container-fluid">
            <br></br>
            <h1>Dietas disponibles</h1>
            <br></br>
            <div class="row">
                {dietas.map((valor, cont) => (
                <div key={cont} class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{valor.titulo}</h5>
                            <p class="card-text">{valor.descripcion}</p>
                            <a href="#" class="btn btn-primary">Saber mas</a>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </div>
    )
}
