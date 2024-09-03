 import React from "react";
 import ReactDOM from "react-dom/client";

 const number =100;

 const Title=()=>
 {
    return(
        <h1>hii title</h1>
    )
 }
const heading =  <h1> this is jsx </h1>

const Headingcom = ()=>(
  
        <div>
           <Title/>
           {number},
           <h1>component </h1>
        </div>
)


console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcom/>);