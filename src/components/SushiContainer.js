import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( {sushi, sushiCounter, setSushiCounter, plates, setPlates, money, setMoney } ) {

  const available = sushi.map((roll) =>{
    return (<Sushi key={roll.id} id={roll.id} name={roll.name} image={roll.img_url} price={roll.price} plates={plates} setPlates={setPlates} money={money} setMoney={setMoney}/>)
  })

  return (
    <div className="belt">
      {available}
      <MoreButton sushiCounter={sushiCounter} setSushiCounter={setSushiCounter}/>
    </div>
  );
}

export default SushiContainer;
