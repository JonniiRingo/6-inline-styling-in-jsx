// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import React from "react"; 
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));


const customStyle = {
    color: "red",
    fontSize: "12px",
    border: "1px solid black", 
}
root.render(
    <React.StrictMode>
        <div>
            <h1 style = {customStyle}>Hello</h1>
        </div>
    </React.StrictMode>
);