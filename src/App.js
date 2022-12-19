import './App.css';
import Contador from './contador/Contador';
import Evento from './evento/Evento';
import Treselementos from './treselementos/Trerselementos';
import Mustang from './coches/Mustang'
import Camaro from './coches/Camaro';
import AudiTT from './coches/AudiTT';
import Delorean from './coches/Delorean';
import React, {useState} from 'react';
import Cabecera from './cabecera/Cabecera';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {

 /* let ListaCoches =[

    {
      marca: "Mustang",
      ruedas: 4,
      altura: 1.5,
      longitud: 2.2,
      color:"Naranja"
    },
    {
      marca: "Camaro",
      ruedas: 4,
      altura: 1.5,
      longitud: 2.2,
      color:"Azul"
    },
    {
      marca: "Audi TT",
      ruedas: 4,
      altura: 1.5,
      longitud: 2.2,
      color:"Rojo"
    },
    {
      marca: "Delorean",
      ruedas: 4,
      altura: 1.5,
      longitud: 2.2,
      color:"Plateado"
    },



  ]*/

/*let nombres = ["Marta", "Pedro" , "Susana"]*/

  let [contador, setContador] = useState(0)

 /* function Suma(){

    setContador(contador + 1)
    return console.log(contador)
  
  }*/
 
  /*let [i, setvariable] = useState(0)

  function Sumai(){

    setvariable(i + 1) ;
    return setvariable;
  }

if (i == 3){
  setvariable(i = 0)
}*/
/*<h3>{nombres[i]}</h3>
      <button onClick={Sumai}>Suma</button>*/

      let muelle = {
        nombre: 'Puerto deportivo',
        barcos: [
        {
        nombre: 'bar quito',
        eslora: '5m',
        tripulantes: 2
        },
        {
        nombre: 'imperioso',
        eslora: '12m',
        tripulantes: 3
        }
        ],
        contacto: {
        telefono: '94463827'
        }
        };

  return (
      <>

      <Cabecera muelleNombre = {muelle.nombre}/>
      <Main listaBarcos = {muelle.barcos}/>
      <Footer telefono = {muelle.contacto.telefono}/>

      </>
      
      //<Mustang ListaCoches = {ListaCoches[0]} />
      //<Camaro ListaCoches = {ListaCoches[1]} />
      //<AudiTT ListaCoches = {ListaCoches[2]} />
      //<Delorean ListaCoches = {ListaCoches[3]} />

      //<Contador/>
      //<Evento />
      //<Treselementos/>

  );
}

export default App;
