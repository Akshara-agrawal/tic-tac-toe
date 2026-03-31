import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { useState } from "react";

function Square({value, onsqrclick}) {
  // const[value,setvalue]=useState(null)
  // function clicked(){
  //   setvalue('X')
  // }
  return <button className="square" onClick={onsqrclick} >{value}</button>;
}

export default function Board() {
  const[sqr, setsqr]=useState(Array(9).fill(null))
  return (
    <div className="ttt">
      <div className="board-row">
        <Square value={sqr[0]} />
        <Square value={sqr[1]}/>
        <Square value={sqr[2]}/>
      </div>

      <div className="board-row">
        <Square value={sqr[3]}/>
        <Square value={sqr[4]}/>
        <Square value={sqr[5]}/>
      </div>

      <div className="board-row">
        <Square value={sqr[6]}/>
        <Square value={sqr[7]}/>
        <Square value={sqr[8]}/>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
);
