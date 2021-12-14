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
        <div className="container-fluid col-sm-11">
            <h1>Dietas actuales</h1>
            <br></br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h3>Titulo</h3></th>
                        <th scope="col"><h3>Descripcion</h3></th>
                        <th scope="col"><h3>Tipo</h3></th>
                        <th scope="col"><h3>Acción</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {dietas.map((valor, cont) => (
                        <tr key={cont}>
                            <td ><h5> {valor.titulo} </h5> </td>
                            <td ><h5>{valor.descripcion} </h5></td>
                            <td ><h5>{valor.tipo}</h5></td>
                            <td ><button className="btn btn-danger d-flex justify-content-end" onClick={() => setValue(valor._id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}