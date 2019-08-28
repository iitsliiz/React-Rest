import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header'
import Dishes from '../Dishes/Dishes';
import Contact from '../Contact/Contact';



class App extends React.Component{


    render() {
        return(
            <div className="app">
                <NavBar/>
                <Header/>
                <Dishes />
                <Contact />               
             </div>   
             
                )   
    
    }

}

export default App;