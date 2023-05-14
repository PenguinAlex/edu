import React from 'react';
import { FaCoins } from 'react-icons/fa';

interface MoneyButtonProps {
    money: number;
    handleClick: () => void;
}

const MoneyButton: React.FC<MoneyButtonProps> = ({ money, handleClick }) => {
    return (
        <div className="flex items-center justify-center bg-yellow-400 p-4 rounded-lg">
            <div className="mr-2">
                <FaCoins size={20} />
            </div>
            <div className="text-lg font-bold">{money}</div>
            <button className="ml-2 px-3 py-1 rounded-md bg-green-500 text-white font-bold w-40 h-14" onClick={handleClick}>
                +
            </button>
        </div>
    );
};

export default MoneyButton;