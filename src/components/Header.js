import React from "react";
import tapsImage from "../img/beer.png";

function Header(){
  return (
    <React.Fragment>
      <div className="header">
        <h1>Tap List</h1>
        <img id="taps-image" src={tapsImage} alt="An image of beer taps with a chalk board showing beer names" />
      </div>
    </React.Fragment>
  );
}

export default Header;