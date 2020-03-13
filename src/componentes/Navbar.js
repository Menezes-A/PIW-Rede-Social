import React from 'react';

class Navbar  extends React.Component { //componente criado 
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <nav className="navbar">
                <button className="butao"><strong> Inicio </strong></button>
                <button className="butao"><strong> Linha do Tempo </strong></button>
                <button className="butao"><strong> Meu Perfil </strong></button>
                <span className = "NomeUsuario"> Olá, NINJA </span>
            </nav>
         );
    }
}
 
export default Navbar ;