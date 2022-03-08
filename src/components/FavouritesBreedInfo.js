// Favourite Blue -- Breed Info cards
import React from "react";
import "./FavouriteBreedInfo.css"

function FavouritesBreedInfo(props) {
  return (
    <div className="fav-breed__container">
      <h2 className="fav-breed__title">{props.title}</h2>
      <p className="fav-breed__discription">{props.discription}</p>
      <button className="fav-breed__delete-button btn">
        Delete from Favourites
      </button>
    </div>
  );
}

export default FavouritesBreedInfo;
