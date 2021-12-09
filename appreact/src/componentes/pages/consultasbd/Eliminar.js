import { useEffect, useState } from 'react';
import EliminarProducto from './EliminarProducto';
function Eliminar() {
    const [dietas, setdietas] = useState([])
    useEffect(() => {
        fetch("/getRegistro")
            .then((res) => res.json())
            .then((dietas) => {
                console.log('Ingresando')
                setdietas(dietas)
            })
    }, [])
    console.log(dietas)
    return (
        // <h3>Dietas</h>
        <EliminarProducto dietas={dietas} />
    )

}
export default Eliminar;