import React from 'react';

var headerStyles = {
    padding: "16px 32px",
    width: "100%",
    color: "white",
    backgroundColor: "#f5ba13",
    fontFamily: "McLaren",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
}

function Header() {
    return <div>
        <h1 style={headerStyles}>Keeper</h1>
    </div>
}

export default Header;