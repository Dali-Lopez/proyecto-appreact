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
        <div>
            {dietas.map((valor, cont) => (
                <div key={cont}>
                    <h1>{valor.nombre}</h1>
                    <button className="btn btn-danger" onClick={() => setValue(valor._id)}>Eliminar</button>
                </div>
            ))}
            <h1>K pazo master</h1>
        </div>
    )
}