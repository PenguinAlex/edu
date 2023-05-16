import React, {FC, useEffect, useState} from 'react';
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null    ;
    swapPlayer: () => void;
}
const BoardComponent:FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null) //выбранная клетка (фигура)

    function click(cell:Cell) { // обработчик нажатия на клетку
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            /* если была выбрана клетка(фигура)
            и клетка по которой клинкули не выбранная клета
            и выбранная фигура существует
            и может двигатся на кликнутую клетку*/
            selectedCell.moveFigure(cell); //двигаем фигуру ВЫБРАННОЙ клетки на КЛИКНУТУЮ клетку
            swapPlayer(); //Меняем текущего игрока
            setSelectedCell(null); //удаляем выделение с выделенной клетки
        }else{
            if (cell.figure?.color === currentPlayer?.color){
                /*если кликнули по клетке с фигурой
                и цвет игрока совпадает с цветов фигуры*/
                setSelectedCell(cell); //выделяем клетку
            }
        }
    }

    function updateBoard(){ //обновление доски
        const newBoard = board.getCopyBoard() // копируем текущую доску в новую
        setBoard(newBoard) //обновляем состояние доски в App.tsx
    }

    function highlightCells(){//Подсвечиваем клетки (возможные для хода фигуры)
        board.highlightCells(selectedCell) //метод подсвечивания клетки на доске
        updateBoard()//обновляем доску
    }

    useEffect(() =>{//при изменениии выбранной клетки
        highlightCells() //поподсвечиваем клетки (возможные для хода)
    },[selectedCell])



    return (
        <div className='  w-[80vmin] h-[80vmin] flex flex-wrap'>
            {board.cells.map((row, index) => //отрисовываем каждую клетку
                <React.Fragment key={index}>
                    {
                        row.map(cell =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )
                    }
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;