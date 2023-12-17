import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  })

  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    // console.log(player)
    // console.log(board)
    const symbole = player === 1 ? "⭐" : "🌙";

    if (board[1] === symbole && board[2] === symbole && board[3] === symbole) {

      setWinner(player);

    }
    else if (board[4] === symbole && board[5] === symbole && board[6] === symbole) {
      setWinner(player);

    }
    else if (board[7] === symbole && board[8] === symbole && board[9] === symbole) {
      setWinner(player);

    }
    else if (board[1] === symbole && board[4] === symbole && board[7] === symbole) {
      setWinner(player);

    }
    else if (board[2] === symbole && board[5] === symbole && board[8] === symbole) {
      setWinner(player);

    }
    else if (board[3] === symbole && board[6] === symbole && board[9] === symbole) {
      setWinner(player);

    }
    else if (board[1] === symbole && board[5] === symbole && board[9] === symbole) {
      setWinner(player);

    }
    else if (board[3] === symbole && board[5] === symbole && board[7] === symbole) {
      setWinner(player);

    }
    setPlayer(player === 1 ? 2 : 1);

  }

  const play = (boxNo) => {

    // when there is already symbole in a box then after clicking on that same box the symbole should not be change, only in the empty box the symbole will appear after click in  the box , because we aleardy set by default empty string value in useState object.

    // agar board ka box empty string ke barabr nahi hai to vha se return kr do
    if (board[boxNo] !== "" || winner !== null) {
      return;
    }

    if (player === 1) {
      // ...board = pehle se jo bhi value aayenge vo sare as it is rahenge
      setBoard({ ...board, [boxNo]: "⭐" })
    }
    else {
      setBoard({ ...board, [boxNo]: "🌙" })
    }


    // console.log("Box No :" ,boxNo);
    //  console.log(board);

    // toggle players

  }

  const reset = () =>{
    setPlayer(1)
      setBoard({
 1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
      })
    setWinner(null);
  }

  useEffect(() => {
    checkWinner(player);
  }, [board])

  return (
    <div>
      <h1 className='main-heading'>Tic Tac Toe</h1>

      <div className='players-contianer'>
        <span className='player-title'>
          player 1: ⭐
        </span>
        <span className='text-center current-player-text'>
        Current Player : {player === 1 ? "⭐" : "🌙"}
      </span>
        <span className='player-title'>
          player 2: 🌙
        </span>
        
      </div>

      


      {
        winner ? (
          <h1 className='winner-text'>Winner is {winner === 1 ? "⭐" : "🌙"}</h1>
        ) : null
      }


      <div className='board'>
        <div className='row'>
          <div className='box' onClick={() => { play(1) }} >
            {board[1]}
          </div>
          <div className='box' onClick={() => { play(2) }} >
            {board[2]}
          </div>
          <div className='box' onClick={() => { play(3) }}  >
            {board[3]}
          </div>
        </div>
        <div className='row'>
          <div className='box' onClick={() => { play(4) }} >
            {board[4]}
          </div>
          <div className='box' onClick={() => { play(5) }}>
            {board[5]}
          </div>
          <div className='box' onClick={() => { play(6) }}>
            {board[6]}
          </div>
        </div>
        <div className='row'>
          <div className='box' onClick={() => { play(7) }}>
            {board[7]}
          </div>
          <div className='box' onClick={() => { play(8) }}>
            {board[8]}
          </div>
          <div className='box' onClick={() => { play(9) }}>
            {board[9]}
          </div>
        </div>
      </div>
      <button type='button'
       className='reset-btn' 
      onClick={reset}>Reset</button>
    </div>
  )
}

export default App