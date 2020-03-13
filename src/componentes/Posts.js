import React from 'react';
import img1 from './img/F1.jpg';
import img2 from './img/F2.jpg';
import img3 from './img/F3.jpg';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className= "Posts">
                < div className="borda">
                    <h3 className="Usuario"> @NINJA00 </h3> {
                        //tag texto aleatoria
                    }
                    <br></br>
                    <img src={img1}></img>
                    <p> #EUODEIOREACT</p>
                </div>

                <br></br>

                <div className="borda">
                    <h3 className="Usuario"> @ANINHA200 </h3>
                    <br></br>
                    <img src={img2}></img>
                    <p> #NOVATATTO </p>
                </div>

                <br></br>

                <div className="borda">
                    <h3 className="Usuario"> @Bezera21 </h3>
                    <br></br>
                    <img src={img3}></img>
                    <p> #TATTO #LOVE #TBMODEIOREACT </p>
                </div>

            </div>
        );
    }
}
 
export default Posts ;