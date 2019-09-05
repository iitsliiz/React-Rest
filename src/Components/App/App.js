import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import Dishes from '../Dishes/Dishes';
import Contact from '../Contact/Contact';
import dishList from '../AllItems/AllDishes';




class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dish : dishList
        }
    }


    render() {
        return(
            <div className="app">
                <NavBar/>
                <Header/>
                <Dishes dishes={this.state.dish} />
                <Contact />               
             </div>   
             
                )   
    
    }

}

export default App;