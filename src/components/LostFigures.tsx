import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps{
    title:string;
    figures: Figure[]
}
const LostFigures:FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='ml-[2vmin] w-[8vmin] font text-[2vmin] overflow-hidden'>
            <h3>{title}</h3>
            <div >
            {
                figures.map((figure, index) =>
                <div key={figure.id} className={index===0?'':'mt-[-60vm]'}>
                    {figure.logo && <img className='w-[8vmin] h-[8vmin]' src={figure.logo}/>}
                </div>)
            }
            </div>
        </div>
    );
};

export default LostFigures;