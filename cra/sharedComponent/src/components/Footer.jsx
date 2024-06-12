import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; Efrei 2024 Sports Association. Omma Habiba BIPLOB - Faiza AKABLI - Grp 1 M2.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    fontFamily: 'Arial, sans-serif'
};

export default Footer;
