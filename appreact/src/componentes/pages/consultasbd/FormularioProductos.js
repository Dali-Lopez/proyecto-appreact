import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react'

export default function FormularioProductos(){
    const [data, setData] = useState({
        nombre: '',
        info: ''
    })
    function recibeDatos (event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(data.nombre)
    }
    function agregarDatos(event) {
        event.preventDefault();
        fetch('/addRegistro',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
        .then(data=>({
            nombre:'',
            info: ''
        }))

    }
    return(

        <div className="container">
            <form className="form-horizontal" onSubmit={agregarDatos}>
                <div className="form-group">
                    <label className="">Nombre</label>
                    <div class="col-sm-10">
                        <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Ingresar un nombre" 
                        value = {data.nombre}
                        onChange={recibeDatos}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="">Información</label>
                    <div classNAme=" col-sm-offset-2col-sm-10">
                        <input
                        type="text"
                        name="info"
                        className="form-control"
                        placeholder="Ingresar información" 
                        value={data.info}
                        onChange={recibeDatos}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}