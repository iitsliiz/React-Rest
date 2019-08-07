import React from 'react';
import Dishes from '../Dishes/Dishes';
import dishList from '../AllItems/AllDishes';
import NavBar from '../NavBar/NavBar';






class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: dishList               
        }         
       
    } 


    render() {
        return(
            <div>
                <NavBar type={this.state.dishes.type} />,
                {
                this.state.dishes.map(dish =>{
                    return <Dishes key={dish.id} 
                    dish={dish} 
                    name={dish.title}
                    imgFile={dish.imgFile}
                    price={dish.price}
                    type={dish.type}
                 />
                    }
                )}
               
             </div>   
             
                )   
    
    }

}

export default App;