import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { useState } from "react";

function Square({ value, onsqrclick }) {
  // const[value,setvalue]=useState(null)
  // function clicked(){
  //   setvalue('X')
  // }
  return (
    <button className="square" onClick={onsqrclick}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setxIsNext] = useState(true);
  const [sqr, setsqr] = useState(Array(9).fill(null));
  function handleclick(i) {
    if (sqr[i] || CalculateWins(sqr)) {
      return;
    }
    const currsqr = sqr.slice();
    if (xIsNext) {
      currsqr[i] = "X";
    } else {
      currsqr[i] = "O";
    }
    setsqr(currsqr);
    setxIsNext(!xIsNext);
  }

  const winner=CalculateWins(sqr)
  let status;
  if(winner){
    status="Winner"+winner
  }
  else{
    status="Next Player"+ (xIsNext?' X':' O');
  }

  return (
    <div className="ttt">
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={sqr[0]} onsqrclick={() => handleclick(0)} />
        <Square value={sqr[1]} onsqrclick={() => handleclick(1)} />
        <Square value={sqr[2]} onsqrclick={() => handleclick(2)} />
      </div>

      <div className="board-row">
        <Square value={sqr[3]} onsqrclick={() => handleclick(3)} />
        <Square value={sqr[4]} onsqrclick={() => handleclick(4)} />
        <Square value={sqr[5]} onsqrclick={() => handleclick(5)} />
      </div>

      <div className="board-row">
        <Square value={sqr[6]} onsqrclick={() => handleclick(6)} />
        <Square value={sqr[7]} onsqrclick={() => handleclick(7)} />
        <Square value={sqr[8]} onsqrclick={() => handleclick(8)} />
      </div>
    </div>
  );
}

export default function Game(){
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function CalculateWins(sqr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c]=lines[i];
     if (sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]) {
      return sqr[a];
    }
  }
  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
);
