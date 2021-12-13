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
        <div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            <div className="float-left"> asdgfasg</div>
            {dietas.map((valor, cont)=>(
                <div key={cont}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                        <div className="col">
                            <div className="card h-100 float-md-left">
                                <img src={logosvg} className="card-img-top" width="300px" height="300px" alt=""></img>
                                <div className="card-body">
                                    <h5 className="card-title">{valor.titulo}</h5>
                                    <p className="card-text">{valor.descripcion}</p>
                                    <a href="https://www.elsevier.es/es-revista-offarm-4-articulo-dietas-hipocaloricas-13070732" className="btn btn-primary">Mas información</a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Actualización 01/12/21</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
// export default function MostrarProducto({dietas}){
//     const [value, setValue] = useState()
//     useEffect(()=>{
//         console.log(value)
//         if(value){
//             fetch(`/deleteRegistro/${value}`,{
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             }).then(res=>res.json())
//         }
//     })
//     return(
//         <div>
//             {dietas.map((valor, cont)=>(
//                 <div key={cont}>
//                     <h1>{valor.nombre}</h1>
//                     <button className="btn btn-danger" onClick={()=>setValue(valor._id)}>Eliminar</button>
//                 </div>
//             ))}
//             <h1>K pazo master</h1>
//         </div>
//     )
// }