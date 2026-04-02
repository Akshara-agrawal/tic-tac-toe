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

function Board({xIsNext ,sqr,onplay}) {
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
    onplay(currsqr)
  }

  const winner=CalculateWins(sqr)
  let status;
  if(winner){
    status="Winner: " + winner;
  }
  else{
    status="Next player: " + (xIsNext ? "X" : "O");
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
  const[history,sethistory]=useState([Array(9).fill(null)]);
  const[currmove,setcurrmove]=useState(0)
  const xIsNext = currmove % 2 === 0;
  const currSqr=history[currmove];
  function handleGame(currsqr){
    const nextHistory = [...history.slice(0, currmove + 1), currsqr];
    sethistory(nextHistory);
    setcurrmove(nextHistory.length - 1);
  }

  function jump(nextmove){
    setcurrmove(nextmove)
  }

  const moves=history.map((sqr,move)=>{
    let description
    if (move>0) {
      description='Go to move #'+move;
    } else {
      description='Go to Game Start.'
    }
    return(
      <li key={move}>
        <button className="btn-move" onClick={()=>jump(move)}>{description}</button>
      </li>
    );
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} sqr={currSqr} onplay={handleGame} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
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
    <Game />
  </React.StrictMode>,
);
