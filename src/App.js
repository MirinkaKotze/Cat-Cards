// GREY CONTAINER
import React from "react";
import "./App.css";
import GreenComponent from "./components/GreenComponent";
import FavouritesComponent from "./components/FavouritesComponent";

function App() {
  const breeds = [
    {
      id: "P",
      title: "Persian cat",
      discription:
        "The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair in English-speaking countries. The first documented ancestors of Persian cats were imported into Italy from Persia around 1620.",
    },
    {
      id: "M",
      title: "Maine Coon",
      discription:
        "The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America. The breed originated in the U.S. state of Maine, where it is the official state cat",
    },
    {
      id: "B",
      title: "British Shorthair",
      discription:
        "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, orange eyes, and a medium-sized tail.",
    },
  ];

  return (
    <div className="container">
      <GreenComponent element={breeds} />
      <FavouritesComponent element={breeds} />
    </div>
  );
}

export default App;
