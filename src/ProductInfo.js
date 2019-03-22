import React from 'react';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const Info = ({ name, price }) => {
    return(
       <div style={style}>
            <h2>{name}</h2>
            <h3>R{price}</h3>
        </div> 

    )
}

export default Info;