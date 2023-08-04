// import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import { useState } from 'react';

function App() {
  const [square,setSquare]=useState(Array(9).fill(null));
  const [xisnext,setXisnext]=useState(true);
  function handleclick(i){
    if(square[i] || calculatewinner(square)){
      return;
    }
    let userenterarray=[...square];
     if(xisnext){
      userenterarray[i]="X";
     }

     else{
      userenterarray[i]="O";
     }
    setSquare(userenterarray);
    setXisnext(!xisnext);
     }
  
  function calculatewinner(square){
     const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
     ]
     for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
        console.log("winner is", square[a]);
        return square[a];
      }
     }
     return null;
  }
  

  
  return  (
<>
<div>
<Squares squarevalue={square[0]} handleclick={()=>handleclick(0)}/>
<Squares squarevalue={square[1]} handleclick={()=>handleclick(1)}/>
<Squares squarevalue={square[2]} handleclick={()=>handleclick(2)}/>
</div>
<div>
<Squares squarevalue={square[3]} handleclick={()=>handleclick(3)}/>
<Squares squarevalue={square[4]} handleclick={()=>handleclick(4)}/>
<Squares squarevalue={square[5]} handleclick={()=>handleclick(5)}/>
</div>
<div>
<Squares squarevalue={square[6]} handleclick={()=>handleclick(6)}/>
<Squares squarevalue={square[7]} handleclick={()=>handleclick(7)}/>
<Squares squarevalue={square[8]} handleclick={()=>handleclick(8)}/>
</div>
</>
  );
}

export default App;
