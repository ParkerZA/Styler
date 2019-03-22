import React from 'react';
import './Second.css';
import Slide from './Slide';
import { product } from './Products';
import { Swipeable} from 'react-swipeable';

const Second = ({ index, Right, Left }) => {

    return(

        <div id="secondview">
            <Swipeable onSwipedRight={Right}
                    onSwipedLeft={Left} >
            <div id="main">
                <Slide classname="slide" 
                    source={product[index].SOURCE}
                    id={product[index].ID}>
                </Slide>
            </div>
            <div className="split">
                <div id="second">
                    <Slide classname="slide" 
                        source={product[index+1].SOURCE}
                        id={product[index+1].ID}>
                    </Slide>
                </div>
                <div id="third">
                    <Slide classname="slide" 
                        source={product[index+2].SOURCE}
                        id={product[index+2].ID}>
                    </Slide>
                </div>   
             </div>   
            </Swipeable>
        </div>

    )


}

export default Second;