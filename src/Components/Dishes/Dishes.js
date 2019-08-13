import React from 'react';
import '../Dishes/Dishes.css';
import dishList from '../AllItems/AllDishes';



class Dishes extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                dishes: dishList               
            }              
    
        this.getMainDish = this.getMainDish.bind(this);
        this.getSideDish = this.getSideDish.bind(this);
        this.getSweets = this.getSweets.bind(this);
        this.getDrinks = this.getDrinks.bind(this);
    }

   
    getMainDish(){
    let dishes= this.state.dishes;
   //console.log(dishes);
    const result = dishes.filter(dish => dish.type === "Main Dish");
    //console.group(result);
   const dish = result.map(dish => {   
    // console.log(dish.price)     
         return(              
            <div className="holds">
                <div className="Dish">
                    <img id="Img" alt={dish.title} src={dish.imgFile}/> 
                <div className="Dish-information">
                    <h3>{dish.title}</h3>
                    <p>{dish.price}</p>                           
                </div> 
                </div> 
            </div>
                    );                 
             })
        return dish;
             
            }
        
            
       
    getSideDish(){
        let dishes= this.state.dishes;
        const result = dishes.filter(dish => dish.type === "Sides & Sauces");
        const dish = result.map(dish => {   
            return(              
                <div className="holds">
                    <div className="Dish">
                        <img id="Img" alt={dish.title} src={dish.imgFile}/> 
                    <div className="Dish-information">
                        <h3>{dish.title}</h3>
                        <p>{dish.price}</p>                           
                    </div> 
                    </div> 
                </div>
                             );                 
                      })
                 return dish;
                      
                     }
                 
    getSweets(){
        let dishes= this.state.dishes;
        const result = dishes.filter(dish => dish.type === "Sweets");
        const dish = result.map(dish => {   
        return(              
            <div id="holds">
                <div className="Dish">
                    <img id="Img" alt={dish.title} src={dish.imgFile}/> 
                <div className="Dish-information">
                    <h3>{dish.title}</h3>
                    <p>{dish.price}</p>                           
                </div> 
                </div> 
            </div>
                    );                 
             })
        return dish;
             
            }
        
    getDrinks(){
        let dishes= this.state.dishes;
        const result = dishes.filter(dish => dish.type === "Drinks");
        const dish = result.map(dish => {   
        return(              
            <div dish={dish} className="holds">
                <div key={dish.id} className="Dish">
                    <img id="Img" alt={dish.title} src={dish.imgFile}/> 
                <div className="Dish-information">
                    <h3>{dish.title}</h3>
                    <p>{dish.price}</p>                           
                </div> 
                </div> 
            </div>
                    );                 
             })
        return dish;
             
            }
        
 render(){
  return( 
        <div>
            <div id='Main Dish'className="title">
                <h1>Main Dishes</h1>
           </div>
            {this.getMainDish()}
            <div id='Sides' className="title">
        <h1>Sides & Sauces</h1>
            </div>
            {this.getSideDish()}
            <div id='Sweets' className="title">
        <h1 >Sweets</h1>
            </div>
            {this.getSweets()}
            <div className="title">
        <h1 id='Drinks' className="title">Drinks</h1>
            </div>
            {this.getDrinks()}
         
     </div>

        
     )
 }

}

export default Dishes;