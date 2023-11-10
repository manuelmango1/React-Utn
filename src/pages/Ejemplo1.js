import react from "react";
import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../Components/Props";

const frutas = ['Manzana','Banana','Palta','Sandia']
const verduras = ['Papa','Zanahoria','Acelga']

const mostrarValor  = valor =>{
    console.log(valor)
}

function Ejemplo1(props){
    return(
        <div>      
            <h2>Ejemplos de Props</h2>
            {/*Propiedad simple y reutilizable*/}
            <EjemploProps1 nombre='Manuel'/>
            {/*Listado de elementos - 11 pdf */}
            <EjemploProps2 elementos={frutas}/>
            <EjemploProps2 elementos={verduras}/>
            {/*Multiples propiedades y destructuring */}
            <EjemploProps3 titulo='Utilizando Props' subtitulo='Un nuevo descubrimiento' cuerpo='Laborum ea magna ipsum nostrud amet adipisicing. Fugiat incididunt occaecat culpa ut sint est excepteur consectetur in nulla consequat voluptate. Non eu esse ea consequat nulla culpa aliquip est excepteur laborum non.'/>
            <EjemploProps4 cambiarValor={mostrarValor}/>
            {/*Si o si necesito pasarle un atributo, en este caso mostrarValor (Linea 7) */}
            <EjemploProps4/>
            {/*Si lo escribo solo, asi sin el manejador, cuando lo complete, va a tirar un error */}      
            <EjemploProps4 cambiarValor={() => {}}/>
            {/*Es una funcion vacia, no se va a romper pero no va a mostrar nada */}   
            <EjemploProps5/>
            <EjemploProps5 eventoClick={mostrarValor}/>
        </div>
    )
}


export default Ejemplo1;