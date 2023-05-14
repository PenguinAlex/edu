import React from 'react';

interface ProductionCardProps {
    name: string;
    count: number;
    productionRate: number;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ name, count, productionRate }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-700 mb-4">{`Count: ${count} | Production Rate: ${productionRate}`}</p>
        </div>
    );
};

export default ProductionCard;