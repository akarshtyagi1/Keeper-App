import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Notes from "./notes.jsx";
import Content from "./notesContent";


function App() {
    return <div >
        <Header />
        <div className="container">
            {
                Content.map((content) => <Notes title={content.title} content={content.content} />)
            }
        </div>
        <Footer />
    </div>
}

export default App;