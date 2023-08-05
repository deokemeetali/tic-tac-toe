// import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import { useState } from 'react';

 function App() {

 const [ squares, setSquares] = useState(Array(9).fill(null));
const [xisNext, setXisnext ] = useState(true);

function handleClick(i){

  if(squares[i] || calculateWinner(squares)){
    return;
  }
  let userEnterArray = [...squares];
  if(xisNext){
    userEnterArray[i] = "X";
  }
  else{
    userEnterArray[i] = "O";
  }  
  setSquares(userEnterArray); 
  setXisnext(!xisNext);
 
 }

 function calculateWinner(squares){
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i =0; i< lines.length; i++){
     const[a,b,c] =lines[i];
     if(squares[a]  && squares[a]=== squares[b] && squares[a] === squares[c]){
      console.log("winner is" + squares[a])
       return squares[a];

     }
  }
  return null;
 } /* function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const userEnterArray = [...squares];
    userEnterArray[i] = xisNext ? 'X' : 'O';

    setSquares(userEnterArray);
    setXisnext(!xisNext);
  }*/
  function renderSquare(i) {
    return (
      <Squares
        squareValue={squares[i]}
        handleClick={() => handleClick(i)}
      />
    );
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every(square => square !== null)) {
    status = "It's a draw!";
  } else {
    status = xisNext ? 'Next player: X' : 'Next player: O';
  }

 // const winner = calculateWinner(squares);
 // const status = winner ? `Winner: ${winner}` : xisNext ? 'Next player: X' : 'Next player: O';

 function handleRestart() {
  setSquares(Array(9).fill(null));
  setXisnext(true);
}
const isGameOver = winner || squares.every(square => square !== null);

return (
  <>
  <div className="status">{status}</div>
  <div className='tic'>
      <div className="board-row">
          <Squares squareValue = {squares[0]} handleClick={() =>handleClick(0)}/>
          <Squares squareValue = {squares[1]} handleClick={() =>handleClick(1)}/>
         <Squares squareValue = {squares[2]} handleClick={() =>handleClick(2)}/>
     </div>
     <div className="board-row">
      <Squares squareValue ={squares[3]} handleClick={() =>handleClick(3)}/>
     <Squares squareValue = {squares[4]} handleClick={() =>handleClick(4)}/>
     <Squares squareValue = {squares[5]} handleClick={() =>handleClick(5)}/>
     </div>
     <div className="board-row">
     <Squares squareValue = {squares[6]} handleClick={() =>handleClick(6)}/>
     <Squares squareValue = {squares[7]} handleClick={() =>handleClick(7)}/>
     <Squares squareValue = {squares[8]} handleClick={() =>handleClick(8)}/>
      </div>
      </div>
      <div className="button-container">
        <button onClick={handleRestart}>Restart</button>
      </div>
      
  </>
    );
 }

export default App;