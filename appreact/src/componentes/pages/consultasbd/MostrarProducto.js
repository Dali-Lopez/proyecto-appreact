import { useEffect, useState } from "react"

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
            {dietas.map((valor, cont)=>(
                <div key={cont}>
                    {/* <h1>{valor.nombre}</h1> */}
                    {/* <button className="btn btn-danger" onClick={()=>setValue(valor._id)}>Eliminar</button> */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className ="card-body">
                                    <h5 className ="card-title">{valor.titulo}</h5>
                                    <p className ="card-footer">{valor.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <h1>K pazo master</h1>
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