import{useEffect, useState} from 'react';

function Contador(props){

let [Contador, setContador] = useState(0);

useEffect(()=>{
    console.log("me ejecuto cuando inicio");
    console.log(Contador);
}
)

useEffect(()=>{
    console.log("me ejecuto cuando cambio")
}, [Contador]);


function Sumaruno(){
    setContador(Contador + 1);
    console.log(Contador);
}

return(
<> 
<h2>{Contador}</h2>
<button id='btn' onClick={Sumaruno}>
Click Me
</button>

</>

)

}

export default Contador;