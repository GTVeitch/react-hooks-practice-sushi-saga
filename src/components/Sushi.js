import React, { useState } from "react";

function Sushi( { id, name, image, price, plates, setPlates, money, setMoney} ) {
  const [eaten, setEaten] = useState(false)

  function eat() {
    if(money >= price){
      if(eaten === false){
        setPlates([...plates, name])
        setMoney(money-price)}
        setEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eat}>
        {eaten ? null : (
          <img
            src={image}
            alt={id}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
