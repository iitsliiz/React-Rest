import React from 'react';
import '../Dishes/Dishes.css';
import Dish from '../Dish/Dish';




class Dishes extends React.Component{
    constructor(props){
        super(props);
        
        this.getMain = this.getMain.bind(this);
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
           
 render(){
  return( 
       <div>
           <h3>Main Dish</h3>
           {this.getMain()}
           <h3>Sides & Sauces</h3>
           {this.getSaS()}
           <h3>Sweets</h3>
           {this.getSweets()}
       </div>        
     );
 }

}

export default Dishes;