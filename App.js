import React from "react" ; 
import ReactDOM from "react-dom/client"; 
import App from './App.js' ; 

const heading = React.createElement("h1",{} , "Zuleen Taker") ; 
//console.log(heading) ; 
const root = ReactDOM.createRoot(document.getElementById("root")) ; 
// passing a react element inside the root  
root.render(heading) ; 
