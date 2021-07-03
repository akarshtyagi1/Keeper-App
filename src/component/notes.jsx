import React from 'react';

var noteStyle = {
    display: "inline-block",
    maxWidth: "200px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid white",
    margin: "10px 20px",
    boxShadow: "0 2px 5px #ccc",
}

function note(props) {
    return <div style={noteStyle}>
        <h3>{props.title}</h3>
        <p editable>
            {props.content}
        </p>
    </div>
}

export default note;