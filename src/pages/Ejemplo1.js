import react from "react";
import { EjemploProps1, EjemploProps2, EjemploProps3 } from "../Components/Props";

const frutas = ['Manzana','Banana','Palta','Sandia']
const verduras = ['Papa','Zanahoria','Acelga']


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
        </div>
    )
}


export default Ejemplo1;