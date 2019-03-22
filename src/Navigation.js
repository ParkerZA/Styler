import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import Unlike from './Unlike';
import Like from './Like';

const Nav = () => {

return(    
    <div>
            <ReactSVG id="filter"
                      src = "filter.svg"></ReactSVG>
            <Link to="/Basket">
                    <ReactSVG id="basket"
                      src="basket.svg">
                    </ReactSVG> 
            </Link>
            <Link to="/Second">
                    <ReactSVG id="second"
                            src="second.svg">
                    </ReactSVG>
            </Link>
            <div id = "thumb" >
                <div id="Unlike"><Unlike /></div>
                <div id="Like"><Like />
            </div>
         </div>
    </div>

)}

export default Nav;