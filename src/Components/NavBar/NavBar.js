import React from "react";
import '../NavBar/NavBar.css';

class NavBar extends React.Component{
 
    
    render(){
        return(
            
                <div id="navbar">
                    
                    <img  id="imglogo"alt="" src="https://i.ibb.co/h2Jx872/logo-Edited.png"/>
                    <a className='group' href='#MainDish'>Main Dishes</a>
                    <a className='group' href="#Sides">Sides & Sauces</a>
                    <a className='group' href="#Sweets">Sweets</a>                    
                    <a className='group' href="#Drinks">Drinks</a>
                    <a className='group' href="#Contact">Contact</a>
                
                </div>
            
            
        )
    }
}

export default NavBar;