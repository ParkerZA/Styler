import React, { Component } from 'react';
import Slide from './Slide'
import { product } from './Products';
import { Swipeable} from 'react-swipeable';
import Header from './Header';
import './App.css';
import Second from './Second';
import Nav from './Navigation';
import Info from './ProductInfo';
import Basket from './Basket';
import { Route, Link, Switch } from 'react-router-dom';

let rails = [];

class App extends Component  {

//--------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
//Stores which slide is currently visible
            currentIndex : 0,
            rail: [],
            itemList: []
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
//     axios.get("https://4pdmal789f.execute-api.eu-west-1.amazonaws.com/Prod/api/test/database")
//     .then(res => {
//         const items = res.data;
//         this.setState({
//             itemList: items
//         });
//     })
//     .catch(error => console.log("Error is " + error));
// }

   
//----------------------------------------------------------------    
    render() {
        return (
        <div>
        <Switch>
        <Route path="/Second" 
        render={() => <Second index={this.state.currentIndex}
                        Right={this.swipeRight}
                        Left={this.swipeLeft}/>}/>
        <Route path="/Basket"
        render={() => <Basket basket={this.state.rail}/>}/>

            <Swipeable onSwipedRight={this.swipeRight}
                       onSwipedLeft={this.swipeLeft}>
                <Header />     
                <Slide classname="slide" 
                    source={product[this.state.currentIndex].SOURCE}
                    id={product[this.state.currentIndex].ID} />
                <Nav />
                <Info 
                    name={product[this.state.currentIndex].NAME}
                    price={product[this.state.currentIndex].PRICE} />
            </Swipeable>
        </Switch>
        </div>
        );
    }    
    
}

export default App;