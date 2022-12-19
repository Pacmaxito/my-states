import { useState } from "react";

function Main(props){

    let [tripulantes1, setTripulantes1] = useState(0)
    let [tripulantes2, setTripulantes2] = useState(0)

    function suma1(){

     setTripulantes1 (tripulantes1 + 1);
        return setTripulantes1;

    }

    function suma2(){

        setTripulantes2 (tripulantes2 + 1);
           return setTripulantes2;
   
       }


return(
<div className="datos">
<h3>lista de barcos</h3>
<p>{props.listaBarcos[0].nombre}</p>
<button onClick={suma1}>suma</button>
<h3>{tripulantes1}</h3>

<p>{props.listaBarcos[1].nombre}</p>
<button onClick={suma2}>suma</button>
<h3>{tripulantes2}</h3>


</div>)
}
export default Main;