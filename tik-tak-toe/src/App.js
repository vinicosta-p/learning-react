import { useState } from "react";

function Square({value, onSquareClick}){

    
  return( <button className="square" onClick={onSquareClick}>{value}</button> )
}



export default function Board() {

  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  const winner = calculateWinner(square);
    
  let status;
  
  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XIsNext ? "X" : "O");
  }
  
  const [square, setSquare] = useState(Array(9).fill(null));
  
  function handleClick(index){

    let squareIsNull = square[index] == null;
    
    if(squareIsNull && !winner){
    
      const nextSquares = square.slice();
  
      if(XIsNext){
        nextSquares[index] = "X";
      } else {
        nextSquares[index] = "O";
      }

      setXIsNext(!XIsNext);
      setSquare(nextSquares);
    
    }
      
    
  }


  return (
    <>
      <div className="status">
        <h1>{status}</h1>
      </div>
      <div className="board-row">
        <Square value = {square[0]} onSquareClick={() => handleClick(0)} />
        <Square value = {square[1]} onSquareClick={() => handleClick(1)} />
        <Square value = {square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value = {square[3]} onSquareClick={() => handleClick(3)} />
        <Square value = {square[4]} onSquareClick={() => handleClick(4)} />
        <Square value = {square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value = {square[6]} onSquareClick={() => handleClick(6)} />
        <Square value = {square[7]} onSquareClick={() => handleClick(7)} />
        <Square value = {square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  ) ;
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}