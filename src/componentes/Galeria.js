import React from 'react';
import Posts from './Posts';

class Galeria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className ="Galeria"> 
            <Posts></Posts>
            </div>
         );
    }
}
 
export default Galeria;