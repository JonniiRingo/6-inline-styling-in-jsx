// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import React from "react"; 
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <div>
            <h1 style = {{color: "red"}}>Hello</h1>
        </div>
    </React.StrictMode>
);