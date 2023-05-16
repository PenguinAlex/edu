import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";

const App = () => {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState( new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState( new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)
    function restart() { //рестарт функция
        setCurrentPlayer(whitePlayer) //изначально ходит белый
        const newBoard = new Board(); // создаем пустую доску
        newBoard.initCells(); // создаём в ней клетки
        newBoard.addFigures();//добавляем фигуры на доску
        setBoard(newBoard) // переносим созданную доску в состояние текущей доски
    }

    useEffect(() =>{//рестарт игры при перезагрузке страницы
        restart()
    }, [])

    function swapPlayer (){// замена текущего игрока
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer: whitePlayer)
    }

    return (
        <div className="w-screen h-screen flex justify-center align-middle flex-wrap">
          <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              swapPlayer={swapPlayer}
          />
            <LostFigures title='Black figures' figures={board.lostBlackFigure}/>
            <LostFigures title="White figures" figures={board.lostWhiteFigure}/>
        </div>
    );
};

export default App;