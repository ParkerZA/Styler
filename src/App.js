import React, { Component } from 'react';
import Slide from './Slide'
import { product } from './Products';
import { Swipeable} from 'react-swipeable';
import Header from './Header';
import './App.css';

let rails = [];

class App extends Component  {

//--------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
//Stores which slide is currently visible
            currentIndex : 0,
            rail: []
        }
        this.swipeRight = this.swipeRight.bind(this);
        this.swipeLeft = this.swipeLeft.bind(this);

    }

//----------------------------------------------------------------    
//Swipe right
   swipeRight = () => {
       let entry = product[this.state.currentIndex];
       rails.push(entry);
        if (this.state.currentIndex === product.length - 1) {
            return this.setState({
                currentIndex: 0,
                rail: rails
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            rail: rails
        })
        console.log(this.state.rail);
 

    }
//----------------------------------------------------------------
//Swipe left
    swipeLeft() {
    if (this.state.currentIndex === product.length - 1) {
        return this.setState({
            currentIndex: 0
        })
    }

    this.setState({
        currentIndex: this.state.currentIndex + 1
    })
   
 }
//-----------------------------------------------------------------

// componentDidMount() {
//     fetch('https://4pdmal789f.execute-api.eu-west-1.amazonaws.com/Prod/api/test/database', {mode: 'no-cors'})
//     .then(res => res.json())
//         .catch(error => console.log(error))
//         .then(myjson => {
//             JSON.stringify(myjson)
//         });
// }

   
//----------------------------------------------------------------    
    render() {
        return (
        <div>
             
            <Swipeable onSwipedRight={this.swipeRight}
                       onSwipedLeft={this.swipeLeft}>
              
                <Slide classname="slide" 
                    source={product[this.state.currentIndex].SOURCE}
                    name={product[this.state.currentIndex].NAME}
                    price={product[this.state.currentIndex].PRICE}
                    id={product[this.state.currentIndex].ID}>
                  
                </Slide>
            
             
            </Swipeable>
  
        </div>
        );
    }    
    
}

export default App;