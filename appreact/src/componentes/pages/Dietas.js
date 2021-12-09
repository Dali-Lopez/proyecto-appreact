import { useEffect, useState } from 'react';
import MostrarProducto from './consultasbd/MostrarProducto';
function Dietas() {
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
        <MostrarProducto dietas={dietas}/>
    )
}
export default Dietas;