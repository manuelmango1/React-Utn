import react from "react";
import alumnos from "../data/alumnos.json"

function Json(props){
    return(
        <div>
            <h2>Ejemplo carga datos JSON</h2>
            <ul>
                {alumnos.map(alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} - Edad: ({alumno.edad})</li>
                ))}
            </ul>
        </div>
    )
}

export default Json;