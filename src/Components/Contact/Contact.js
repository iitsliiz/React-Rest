import React from "react";
import "./Contact.css";

class Contact extends React.Component{

render(){
    return(
        <div className="bkgrd" >
            <div id="Contact">
            <img alt="lady" id="lady" src="https://i.ibb.co/vsqMZj5/lady1.png"/>
            <h1>Contact us!</h1>
            <h4>Phone:<a href="tel:9105788754"> 910-578-8754</a></h4>
            <h4>Email:<a href="mailto:dhanskitchen@gmail.com?subject=subject&cc=cc@gmail.com"> dhanskitchen@gmail.com</a></h4>
            <h3><a href="https://www.instagram.com/dhanskitchen">Instagram</a> & 
            <a href="https://www.facebook.com/dhanskitchen">Facebook</a>: @dhanskitchen</h3>
            </div>
        </div>
    )
}
}


export default Contact;