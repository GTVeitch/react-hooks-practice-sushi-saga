import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiCounter, setSushiCounter] = useState(1)
  const [shownSushi, setShownSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(100)



  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(fSushi => {
      setShownSushi(fSushi.filter((roll)=>(roll.id===sushiCounter) || (roll.id===sushiCounter+1) || (roll.id===sushiCounter+2) || (roll.id===sushiCounter+3)))
    })
  }, [sushiCounter])

  return (
    <div className="app">
      <SushiContainer sushi={shownSushi} sushiCounter={sushiCounter} setSushiCounter={setSushiCounter} plates={plates} setPlates={setPlates} money={money} setMoney={setMoney} />
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
