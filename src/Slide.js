import React from 'react';
import './Slider.css'
import 'tachyons';
import ReactSVG from 'react-svg';
import Header from './Header';
import Unlike from './Unlike';
import Like from './Like'

const Slide = ({ source, name, price, id }) => {
        
        return (
        <div className = "container">
                <div id="slide" className="tc" >
                        <div id="header">
                                <Header />
                                <ReactSVG id="filter"
                                src = "filter.svg"></ReactSVG>
                                <ReactSVG id="basket"
                                src="basket.svg"></ReactSVG>
                        </div>
                        <img src={source}  alt=""/>
                        <div id = "thumb" >
                           <div id="Unlike"><Unlike /></div>
                           <div id="Like"><Like /></div>
                        </div>
                        <h2>{name}</h2>
                        <h3>R{price}</h3>
                </div>   
                                
        </div>
        );
}

export default Slide;