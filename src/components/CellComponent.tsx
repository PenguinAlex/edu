import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps{
    cell: Cell;
    selected: boolean;
    click: (cell:Cell) => void;
}

const CellComponent:FC<CellProps> = ({cell,selected,click}) => {
    return (
        <div
            className={[
                'w-[12.5%] h-[12.5%] relative justify-center items-center flex',
                cell.color,
                selected ? 'bg-yellow-400' : '',
                cell.available && cell.figure ? 'bg-green-700' : ''
            ].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className='w-1/4 h-1/4 rounded-full bg-green-700'/>}
            {cell.figure?.logo && <img className=' relative' src={cell.figure.logo} alt=''/>}
        </div>
    );
};

export default CellComponent;