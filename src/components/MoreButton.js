import React from "react";

function MoreButton( { sushiCounter , setSushiCounter } ) {

  function moreSushi() {
    sushiCounter < 97 ?
    setSushiCounter(sushiCounter+4) :
    setSushiCounter(1)
  }

  return <button onClick={moreSushi}>More sushi!</button>;
}

export default MoreButton;
