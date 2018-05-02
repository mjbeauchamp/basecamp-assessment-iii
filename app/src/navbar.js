import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return (
            <div className="NavBar">
                <div className='HomeLink'>
                    <a href="#">CSS and SVG Projects</a>
                </div>
                <ul className="NavList">
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
            </div>      
        );
    }
}

export default NavBar;