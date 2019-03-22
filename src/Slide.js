import React from 'react';
import './Slider.css'
import 'tachyons';
import ReactSVG from 'react-svg';
import Header from './Header';
import Second from './Second';
import { Route, Link, Switch } from 'react-router-dom';
import App from './App';
import Nav from './Navigation';

const Slide = ({ source, name, price, id }) => {
        
        return (
        <div className = "container">

                <div id="slide" className="tc" >
                        <img src={source}  alt=""/>
                </div> 
  
        </div>

        );
}

export default Slide;