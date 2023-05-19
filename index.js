import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("div", {id : "parent"},  
                [React.createElement("div",{id:"child"}, 
                [React.createElement("h1",{}," practice"), 
                React.createElement("h1",{},"Practiceo ok  practice 22")]),
                React.createElement("div",{id:"child22"}, 
                [React.createElement("h1",{},"Practice N  practice"), 
                React.createElement("h1",{},"Practice practice 22")])
                ]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);