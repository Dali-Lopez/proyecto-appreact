import { useEffect, useState } from "react"
export default function MostrarProducto({ dietas }) {
    const [value, setValue] = useState()
    useEffect(() => {
        console.log(value)
        if (value) {
            fetch(`/deleteRegistro/${value}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
        }
    })
    return (
        <div className="container-fluid">
            <h1>Dietas actuales</h1>
            {dietas.map((valor, cont) => (
                <div key={cont}>
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th><h5>Titulo</h5></th>
                                <th><h5>Descripcion</h5></th>
                                <th><h5>Tipo</h5></th>
                                <th><h5>Acción</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-sm-3"> <h6> {valor.titulo} </h6> </td>
                                <td className="col-sm-3"><h6>{valor.descripcion} </h6></td>
                                <td className="col-sm-3"><h6>{valor.tipo}</h6></td>
                                <td className="col-sm-3"><button className="btn btn-danger" onClick={() => setValue(valor._id)}>Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            {/* {dietas.map((valor, cont) => (
                <div key={cont}>
                    <tr>
                        <td>{valor.titulo}</td>
                        <td>{valor.descripcion}</td>
                        <td>{valor.tipo}</td>
                        <td><button className="btn btn-danger" onClick={() => setValue(valor._id)}>Eliminar</button></td>
                    </tr>
                </div>
            ))} */}
        </div>
    )
}