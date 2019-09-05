import React from "react";
import "../Dish/Dish.css";



class Dish extends React.Component{
   
       render(){
    return(              
        <div className="box" dish={this.props.dish}>
            <div  className="Dish">
                <img id="ImgFood" alt={this.props.title} src={this.props.imgFile}/> 
            <div className="Dish-information">
                <h3>{this.props.title}</h3>
                <p>{this.props.price}</p>                           
            </div> 
            </div> 
        </div>
                );                 
         }
   }


    


export default Dish;