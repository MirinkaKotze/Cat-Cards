import React from "react";
import "./GreenComponent.css";
import GreenBreadCatInfo from "./GreenBreadCatInfo";
import SearchContainer from "./SearchContainer";

function GreenComponent(props) {
  console.log(props)
    return (
      <div className="green-container">
        <h1>Cat cards</h1>        
        <SearchContainer/>
          {props.element.map((element) => {
            return (
                <GreenBreadCatInfo title={element.title} discription={element.discription} />
                  
                );
             })}
        
         
          </div> 
        );
}

export default GreenComponent;