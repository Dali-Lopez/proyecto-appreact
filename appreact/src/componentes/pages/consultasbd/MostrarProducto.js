import { useEffect, useState } from "react"
import React, { Component } from 'react'; 
import logosvg from '../../../img/logoNutricion.svg'
import images from '../extras/imagenes'
// Agregue las cards, ahora tengo que agregar imagenes, y listo yas estubo dijo el fontanero

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
            <div className="row">
                {dietas.map((valor, cont) => (
                <div key={cont} className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{valor.titulo}</h5>
                                <img src={images[1]} width="300px" height="300px" alt=""></img>
                            <p className="card-text">{valor.descripcion}</p>
                            <a href="https://medlineplus.gov/spanish/weightcontrol.html#:~:text=Alcanzar%20un%20peso%20saludable%20puede,la%20artritis%20y%20algunos%20c%C3%A1nceres." className="btn btn-primary">Saber mas</a>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </div>
    )
}
