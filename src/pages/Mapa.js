import react from "react";
import "../css/mapa.css"
function Mapa(props){
    return(
        <div className="mapa">
            <h2>Ubicacion</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51998.59163080658!2d-60.923938296982236!3d-35.456973550767856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0deaa538bdeb%3A0x9d21f4202189f16c!2s9%20de%20Julio%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1699877449221!5m2!1ses-419!2sar" 
            style={{ width:600, height:450, border:0,allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} >    
            </iframe>
        </div>
    )
}

export default Mapa;