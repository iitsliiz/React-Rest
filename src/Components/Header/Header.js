import React from 'react';
import "./Header.css";

class Header extends React.Component{
    render(){
        return(
        <div id="header">
            <img  id="imglogo"alt="" src="https://i.ibb.co/h2Jx872/logo-Edited.png"/>
            <h1>Dhan's Kitchen on the Go</h1>
            <h2>"Fayetteville/ Fort Bragg's Authentic Caribbean Food Trailer"</h2>
        </div>
        )
    }
}

export default Header;