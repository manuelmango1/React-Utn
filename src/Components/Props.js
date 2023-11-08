import react from "react";

function EjemploProps1(props){
    return(
        <div>
            <h3>hola {props.nombre}</h3>
        </div>
    )
}

function EjemploProps2(props){
    
    const {elementos} = props;

    return(
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}

function EjemploProps3({titulo, subtitulo, cuerpo}){
    return(
        <div>
            <h4>    {titulo}    </h4>
            <h5>   {subtitulo}  </h5>
            <p>     {cuerpo}     </p>
        </div>
    )
}

export{
    EjemploProps1,
    EjemploProps2,
    EjemploProps3
}