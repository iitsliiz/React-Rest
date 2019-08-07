import React from 'react';
import '../Dishes/Dishes.css';



class Dishes extends React.Component{
    constructor(props){
        super(props);
        this.getMainDish = this.getMainDish.bind(this);
        this.getSideDish = this.getSideDish.bind(this);
        this.getSweets = this.getSweets.bind(this);
        this.getDrinks = this.getDrinks.bind(this);
    }

   
    getMainDish(){
    console.log(this.props.type)
    if(this.props.type ==="Main Dish"){
        console.log(this.props.type);
        
            return(
                <div>
                       
                     <div className="holds">
                        <div className="Dish">
                           <img id="Img" alt={this.props.name} src={this.props.imgFile}/> 
                           <div className="Dish-information">
                               <h3>{this.props.name}</h3>
                               <p>{this.props.price} </p>
                           
                           </div> 
                       </div> 
                       </div>
                </div>
                    );
                
           }   };
        
            
       
        getSideDish(){
            if(this.props.type ==="Sides & Sauces"){
                    return(
                     <div className="holds">
                        <div className="Dish">
                           <img id="Img" alt={this.props.name} src={this.props.imgFile}/> 
                           <div className="Dish-information">
                               <h3>{this.props.name}</h3>
                               <p>{this.props.price} </p>
                           
                           </div> 
                       </div> 
                       </div>
                    );
                }
                };

         getSweets(){
            if(this.props.type ==="Sweets"){
                return(
                    <div className="holds">
                        <div className="Dish">
                            <img id="Img" alt={this.props.name} src={this.props.imgFile}/> 
                            <div className="Dish-information">
                            <h3>{this.props.name}</h3>
                            <p>{this.props.price} </p>
                                   
                            </div> 
                        </div> 
                    </div>
                );
            }
        };
        getDrinks(){
            if(this.props.type ==="Drinks"){
                    return(
                     <div className="holds">
                        <div className="Dish">
                           <img id="Img" alt={this.props.name} src={this.props.imgFile}/> 
                           <div className="Dish-information">
                               <h3>{this.props.name}</h3>
                               <p>{this.props.price} </p>
                           
                           </div> 
                       </div> 
                       </div>
                    );
                }
                };
 
 render(){
  return( <div>
         
         {this.getMainDish()}
         
         {this.getSideDish()}

         {this.getSweets()}

         {this.getDrinks()}
     </div>

        
     )
 }

}

export default Dishes;