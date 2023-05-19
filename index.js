
{/* <div id = "parent">
    <div id = "child">
        <h1>Practice practice</h1>
    </div>
</div> */}

{/* <div id = "parent">
    <div id = "child">
        <h1>Practice practice</h1>
        <h1>Practice practice 22</h1>
    </div>
</div> */}


{/* <div id = "parent">
    <div id = "child">
        <h1>Practice practice</h1>
        <h1>Practice practice 22</h1>
    </div>
    <div id = "child22">
        <h1>Practice practice</h1>
        <h1>Practice practice 22</h1>
    </div>

</div> */}

const heading = React.createElement("div", {id : "parent"},  
                [React.createElement("div",{id:"child"}, 
                [React.createElement("h1",{},"Practice practice"), 
                React.createElement("h1",{},"Practice practice 22")]),
                React.createElement("div",{id:"child22"}, 
                [React.createElement("h1",{},"Practice practice"), 
                React.createElement("h1",{},"Practice practice 22")])
                ]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);