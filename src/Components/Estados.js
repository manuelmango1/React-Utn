import react, { useState } from "react";


import "../css/estados.css"


function Estados(props){

    const [counter, setCounter] = useState(0);

    return(
        <div className="contenedor">
            <h3>{`Contador ${counter}`}</h3>

            <div className="buttonGroup">
                <button className="success" onClick={()=> setCounter(counter + 1)}>+</button>
                <button className="error" onClick={()=> setCounter(counter - 1)}>-</button>
            </div>


        </div>
    )
}

export{
    Estados
}