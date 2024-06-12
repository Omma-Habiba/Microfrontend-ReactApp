import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Welcome to the Sports Association Website</h1>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
};

export default Header;
