import "../css/api.css"

import { useEffect, useState } from "react";

function Api(props){
    
    const [cargando, setCargando] = useState(false);
    const[personajes, setPersonajes] = useState([]);

    useEffect(()=>{
        const cargarDatos = async() =>{
            setCargando(true);
            const res = (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false)
        }
        cargarDatos();
    }, []);

//fetch > Sirve para traer los datos nativos de JS. Tambien se puede utilizar axios(instalar dependencia)

    return(
        <>
        <h2>Datos API</h2>
    {cargando ? <p>Cargando Datos....</p> :(
       <div className="personajes">

            <div className="personaje">
                <h4>personaje</h4>
                <div className="ficha">
                <div className="foto">
                    <img src="https://fakeimg.pl/150x150/a19494/000000?text=FOTO&font=museo" alt="FOTO"/>
                </div>
                <div className="datos">
                    <h6>Especie: Humano o No</h6>
                    <h6>Vivo: SI o NO</h6>
                </div>
            </div>

            </div>

       </div>
    )} {/*Termina el operador ternario de linea 25 */}
       </>
    )
}

export default Api;