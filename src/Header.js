import React from 'react';

let style = {
    display: 'flex',
    width: '100vw',
    height: '12vh',
    position: 'relative',
    fontFamily: 'Raleway, sans-serif',
    fontSize: '40px', 
    zIndex: 2,
    top: '0',
    left: '0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderBottom: '3px solid grey'
}

const Header = () => {
    return (
        <div>
        <header style={style}>Stylr</header>

        </div>
    )
}

export default Header;