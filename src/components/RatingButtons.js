import React, { useState } from "react";

const RatingButtons = (props) => {
  const [value, setValue] = useState(0);
  const buttons = [1, 2, 3, 4, 5];

  const valueHandler = (event) => {
    const clickedValue = Number(event.target.textContent);
    setValue(clickedValue);
    props.onChildValueChange(clickedValue);
  };
  return (
    <div className="card__buttons">
      {buttons.map((buttonValue) => (
        <button
          onClick={valueHandler}
          key={buttonValue}
          className={`card__button${buttonValue === value ? " selected" : ""}`}
        >
          {buttonValue}
        </button>
      ))}
    </div>
  );
};

export default RatingButtons;
