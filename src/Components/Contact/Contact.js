import React from "react";
import "./Contact.css";

class Contact extends React.Component{

render(){
    return(
        <div id="Contact">
            <h3 >Contact us!</h3>
            <h4><a href="tel:9105788754">Phone: 910-578-8754</a></h4>
            <h4>Email:<a href="mailto:dhanskitchen@gmail.com?subject=subject&cc=cc@gmail.com"> dhanskitchen@gmail.com</a></h4>
            <h3><a href="https://www.instagram.com/dhanskitchen">Instagram</a> & 
            <a href="https://www.facebook.com/dhanskitchen">Facebook</a>: @dhanskitchen</h3>
        </div>
    )
}
}


export default Contact;