import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");

  const calculateWinner = (squares) => {
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReplay = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setStatus("Next player: X");
  };

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (newSquares.every((square) => square !== null)) {
      setStatus("It's a Draw!");
    } else {
      setXIsNext(!xIsNext);
      setStatus(`Next player: ${xIsNext ? "O" : "X"}`);
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <>
      <div className="text-center ticcontainer">
        <h2>{status}</h2>
        <div className="board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleReplay}>
            Replay
          </button>
        </div>
      </div>
    </>
  );
}

export default Board;
