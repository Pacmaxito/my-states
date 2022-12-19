
function Camaro(props){


return(
    <div className="datos">
     <h3>{props.ListaCoches.marca}</h3>
     <h4>{props.ListaCoches.ruedas}</h4>
     <h4>{props.ListaCoches.altura}</h4>
     <h4>{props.ListaCoches.longitud}</h4>
     <h4>{props.ListaCoches.color}</h4>
    
    </div>



) 


}

export default Camaro;