
function Evento(props){

    let evento = {
        nombre: "Salsa dance party",
        fecha: "24/07/2020",
        hora: "16:00",
        lugar: {
            direccion:"Done Bikendi Kalea, 2",
            ciudad: "Bilbao"
        }
        
        }

        return(
            
            <div className="datos">
                <h3>{evento.nombre}</h3>
                <p>{evento.fecha}</p>
                <p>{evento.hora}</p>
                <p>{evento.lugar.direccion}</p>
                <p>{evento.lugar.ciudad}</p>


            </div>
        )
}

export default Evento;