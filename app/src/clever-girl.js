import React, {Component} from 'react';
import img from './clever-girl.jpg';

class CleverGirl extends Component{
    render(){
        return (
            <div>
                <img className="CleverGirl" src={img} />
                <h1>Clever Girl</h1>
            </div>      
        );
    }
}

export default CleverGirl;