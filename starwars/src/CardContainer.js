import React from "react";

const CardContainer = props => {
  return (
    <div className="main-wrapper">
      <div className="card-wrapper">
        <h1 className="Header charHeader">{props.character.name}</h1>
        <ol className="charData">
          <li>Birth year: {props.character.birth_year}</li>
          <li>Gender: {props.character.gender}</li>
          <li>Eye color: {props.character.eye_color}</li>
          <li>Height: {props.character.height}</li>
          <li>Mass: {props.character.mass}</li>
          <li>Skin color: {props.character.skin_color}</li>
        </ol>
      </div>
      <div className="return" onClick={props.returnToList}>Return to list</div>
    </div>

  );
};

export default CardContainer;
