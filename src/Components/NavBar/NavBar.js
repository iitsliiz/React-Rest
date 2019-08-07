import React from "react";
import dishList from '../AllItems/AllDishes';

class NavBar extends React.Component{
 
    
    render(){
        return(
            <div>
                <ul>
                    <button href="#Main Dishes">Main Dishes</button>
                    <a href="#Sweets">Sweets</a>
                    <a href="#Sides">Sides</a>
                </ul>
                
            
            </div>
        )
    }
}

export default NavBar;