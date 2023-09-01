import Card from '../Card/Card'
import './Grid.css'
import { useState } from 'react'
function isWinner(board,symbol){
    if(board[0]===board[1]&&board[1]===board[2]&&board[2]===symbol) return symbol;
    if(board[3]===board[4]&&board[4]===board[5]&&board[5]===symbol) return symbol;
    if(board[6]===board[7]&&board[7]===board[8]&&board[8]===symbol) return symbol;
    if(board[0]===board[3]&&board[3]===board[6]&&board[6]===symbol) return symbol;
    if(board[1]===board[4]&&board[4]===board[7]&&board[7]===symbol) return symbol;
    if(board[2]===board[5]&&board[5]===board[8]&&board[8]===symbol) return symbol;
    if(board[0]===board[4]&&board[4]===board[8]&&board[8]===symbol) return symbol;
    if(board[1]===board[4]&&board[4]===board[7]&&board[7]===symbol) return symbol;
    if(board[2]===board[4]&&board[4]===board[6]&&board[6]===symbol) return symbol;
    return ""
}
function Grid({numberofCards}){
    const [turn,setTurn]=useState(true) // true is 0 and false is x
    const [board,setBoard]=useState(Array(numberofCards).fill(""))
    const [winner,setWinner]=useState(null)
    function play(index){
        console.log("move played",index)
        setTurn(!turn)
        if(turn==true){
            board[index]="O"
        }
        else{
            board[index]="X"
        }
        const winner=isWinner(board,turn?"O":"X")
        if(winner){
            setWinner(winner)
        }
        setBoard([...board])
    }
    function reset(){
        setBoard(Array(numberofCards).fill(""))
        setWinner(null)
        setTurn(true)
    }
return(
    <> 
    <>
    {
        winner&&(
            <>
            <h1 className="turn-hilight" >Winner is {winner}</h1>
            <button onClick={reset}>Reset</button>
            </>
        )
    }
    </> 
    <h1 className='turn-hilight'>Current Turn:{(turn)?'O':'X'}</h1>
    <div className='grid'>
   {board.map((value,idx)=>{
    return <Card  onPlay={play} player={value} key={idx} index={idx}/>
   })}
</div>
    </>

    
    
)
}
export default Grid