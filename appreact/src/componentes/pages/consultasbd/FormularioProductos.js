import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react'

export default function FormularioProductos(){
    const [data, setData] = useState({
        titulo: '',
        descripcion: '',
        contenido: '',
        tipo: ''
        // nombre: '',
        // info: ''
    })
    function recibeDatos (event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(data.titulo)
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
            titulo: '',
            descripcion: '',
            contenido: '',
            tipo: ''
        }))

    }
    return(

        <div className="container">
            <form className="form-horizontal" onSubmit={agregarDatos}>
                <div className="form-group">
                    <label className="">titulo</label>
                    <div class="col-sm-10">
                        <input 
                        type="text"
                        name="titulo"
                        className="form-control"
                        placeholder="Ingresar titulo" 
                        value = {data.titulo}
                        onChange={recibeDatos}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="">Descripcion</label>
                    <div classNAme=" col-sm-offset-2col-sm-10">
                        <input
                        type="text"
                        name="descripcion"
                        className="form-control"
                        placeholder="Ingresar una descripción" 
                        value={data.descripcion}
                        onChange={recibeDatos}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="">contenido</label>
                    <div classNAme=" col-sm-offset-2col-sm-10">
                        <input
                        type="text"
                        name="contenido"
                        className="form-control"
                        placeholder="Ingresar contenido" 
                        value={data.contenido}
                        onChange={recibeDatos}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="">Tipo</label>
                    <div classNAme=" col-sm-offset-2col-sm-10">
                        <input
                        type="text"
                        name="tipo"
                        className="form-control"
                        placeholder="Ingresar un tipo" 
                        value={data.tipo}
                        onChange={recibeDatos}
                        />
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