import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import './index.css';
import Galeria from './componentes/Galeria';


function App() {
  return (  //tudo que tem aqui dentro é HTML
    <div className="App">
        <Navbar></Navbar> 
        {
        //esse navbar esta rodando informações que são do componentes Navbar
        //só libeira um componente por vez
        }
        <Galeria></Galeria>
    </div>

  );
}

export default App;
