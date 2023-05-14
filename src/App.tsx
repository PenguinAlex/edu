import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

const App = () => {
    const [board, setBoard] = useState(new Board())
    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard)
    }
    useEffect(() =>{
        restart()
    }, [])
    return (
        <div className="w-screen h-screen flex justify-center align-middle">
          <BoardComponent board={board} setBoard={setBoard}/>
        </div>
    );
};

export default App;