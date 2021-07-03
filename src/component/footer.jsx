import React from 'react';

var year = new Date().getFullYear();

var footerStyles = {
    padding: "20px",
    width: "100%",
    color: "grey",
    backgroundColor: "#eee",
    position: "absolute",
    bottom: "0",
    textAlign: "center",
    fontSize: "20px"
}

function footer() {
    return <div>
        <p style={footerStyles}> Copyright &#169; {year}</p>
    </div>
}

export default footer;