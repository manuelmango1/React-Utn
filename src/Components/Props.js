import react from "react";
import "../css/props.css"

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

function EjemploProps4(props){
    //Cuando se produzca el evento onChange en el input
    //ejecuto la funcion anonima que llama a la funcion
    //que enviamos en la prop 'cambiarValor'
    
    
    return(
        <label htmlFor="">Ver en consola: <input type="text" onChange={(e) =>
        props.cambiarValor(e.target.value)}/></label>
    )
}

function EjemploProps5(props){
//defino la funcion que va a manejar el evento del click
    const handleClick = e => {
//valido que esten pasando as props que necesito
//si se da la condicion o la pasaron > va a mostrar, me clickeaste, si no, no muestra nada.
//porque en este caso el control esta dentro del componente
        if(props.eventoClick){
            props.eventoClick("Me Clickeaste")
        }
    }
    return(
        <p><button onClick={handleClick}>Clickeame</button></p>
    )
}
export{
    EjemploProps1,
    EjemploProps2,
    EjemploProps3,
    EjemploProps4,
    EjemploProps5
}