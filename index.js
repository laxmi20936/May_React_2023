import React from "react";
import ReactDOM from "react-dom/client";

const Funk = ()=> (
    <div>
        <h1>ran</h1>
        <h1>nath</h1>
    </div>
)
const heading = (<div>
            <h1>Lax waghmore mi</h1>
            <p>ppp qq</p>
            <Funk/>
   </div>)

 var abc = "Coool";

const Comp = () =>  <>
        <>
        <h1>oklpppp</h1>
        <p>kk lax</p>
        {heading}
        <Funk/>
        {2+9999} ,{abc}
        <><h1>nhi</h1></>
    </>
    </>
    
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp/>);