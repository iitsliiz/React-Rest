import React from "react";
import '../NavBar/NavBar.css';

class NavBar extends React.Component{
 
    
    render(){
        return(
            
                <div id="navbar">
                    
                    
                    <a className='group' href='#Main Dish'>Main Dishes</a>
                    <a className='group' href="#Sides">Sides & Sauces</a>
                    <a className='group' href="#Sweets">Sweets</a>                    
                    <a className='group' href="#Drinks">Drinks</a>
                    <a className='group' href="#Contact">Contact</a>
                
                </div>
            
            
        )
    }
}

export default NavBar;