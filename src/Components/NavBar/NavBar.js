import React from "react";
import '../NavBar/NavBar.css';

class NavBar extends React.Component{
 
    
    render(){
        return(
            <div id="navbar">
                <ul>
                    <a href='#Main Dishes'>Main Dishes</a>
                    <a href="#Sweets">Sweets</a>
                    <a href="#Sides">Sides</a>
                    <a href="#Drinks">Drinks</a>
                </ul>
                
            
            </div>
        )
    }
}

export default NavBar;