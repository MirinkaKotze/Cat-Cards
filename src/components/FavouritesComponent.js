import React from "react";
import FavouritesBreedInfo from "./FavouritesBreedInfo";
import "./FavouritesComponent.css";

function FavouritesComponent(props) {
  return (
    <div className="favourites__container">
      <h1 className="favourtes__title">Favourites:</h1>
      {props.element.map((element) => { 
        return (
          <FavouritesBreedInfo title={element.title} discription={element.discription}/>
        );
      })}       
  
    </div>
  );
}

export default FavouritesComponent;
