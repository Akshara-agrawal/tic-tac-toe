import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Square({value}) {
  return <button className="square">X</button>;
}

export default function Board() {
  return (
    <div className="ttt">
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
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
