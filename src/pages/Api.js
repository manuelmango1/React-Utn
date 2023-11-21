import "../css/api.css"

import { useEffect, useState } from "react";

function Api(props){
    
    const [cargando, setCargando] = useState(false);
    const[personajes, setPersonajes] = useState([]);

    useEffect(()=>{
        const cargarDatos = async() =>{
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
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
{personajes.map(personaje=> (
        <div className="personaje" key={personaje.id}>
            <h4>{personaje.name}</h4>
            <div className="ficha">
                <div className="foto">
                    <img src={personaje.image} alt="FOTO"/>
                </div>
                <div className="datos">
                    <h6>Especie: {personaje.species === 'Human' ? 'Humano' : personaje.species}</h6>
                <h6>Vivo: {personaje.status === 'Alive' ? 'Si' : 'No'}</h6>
                </div>
            </div>

        </div>
        ))}
    </div>
    )} {/*Termina el operador ternario de linea 25 */}
    </>
    )
}

export default Api;