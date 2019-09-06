import React from 'react';
import '../Dishes/Dishes.css';
import Dish from '../Dish/Dish';




class Dishes extends React.Component{
    constructor(props){
        super(props);
        
        this.getMain = this.getMain.bind(this);
        this.getSaS = this.getSaS.bind(this);
        this.getSweets = this.getSweets.bind(this);
        this.getDrinks = this.getDrinks.bind(this);
    }


    getMain(){
        const dishes = this.props.dishes;
        const filterMain = dishes.filter( dish => dish.type === 'Main Dish').map(dish => {
            return (
                
                < Dish key={dish.id}
                                dish={dish}
                                title={dish.title}
                                imgFile={dish.imgFile}
                                price={dish.price}
                                type={dish.type}               
                   
                   />

            )})
       
        return filterMain;
   }

   getSaS(){
    const dishes = this.props.dishes;
    const filterMain = dishes.filter( dish => dish.type === 'Sides & Sauces').map(dish => {
        return (
            
            < Dish key={dish.id}
                            dish={dish}
                            title={dish.title}
                            imgFile={dish.imgFile}
                            price={dish.price}
                            type={dish.type}               
               
               />

        )})
        return filterMain;
   }
        

    getSweets(){
        const dishes = this.props.dishes;
        const filterMain = dishes.filter( dish => dish.type === 'Sweets').map(dish => {
            return (
                    < Dish key={dish.id}
                                dish={dish}
                                title={dish.title}
                                imgFile={dish.imgFile}
                                price={dish.price}
                                type={dish.type}               
                    />
                     )})
   
    return filterMain;


}


getDrinks(){
    const dishes = this.props.dishes;
    const filterMain = dishes.filter( dish => dish.type === 'Drinks').map(dish => {
        return (
                < Dish key={dish.id}
                            dish={dish}
                            title={dish.title}
                            imgFile={dish.imgFile}
                            price={dish.price}
                            type={dish.type}               
                />
                 )})

return filterMain;


}
           
 render(){
  return( 
       <div>
           <h3 className="title">Main Dish</h3>
           <h4 className="minHead">(taxes are charged seperately)</h4>
           <h4 className="minHead">Rice plates are served with rice and beans, cabbage and sweet fried plantains.</h4>
           <h4 className="minHead">Roti plates are served with curried potatoes.</h4>
           {this.getMain()}
           <h3 className="title">Sides & Sauces</h3>
           {this.getSaS()}
           <h3 className="title">Sweets</h3>
           {this.getSweets()}
           <h3 className="title">Drinks</h3>
           {this.getDrinks()}
       </div>        
     );
 }

}

export default Dishes;