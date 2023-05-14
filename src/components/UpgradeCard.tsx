import React from 'react';

interface UpgradeCardProps {
    name: string;
    cost: number;
    description: string;
    handleClick: () => void;
}

const UpgradeCard: React.FC<UpgradeCardProps> = ({ name, cost, description, handleClick }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-2">Cost: {cost}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                Buy
            </button>
        </div>
    );
};

export default UpgradeCard;