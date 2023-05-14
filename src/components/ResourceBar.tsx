import React from 'react';

interface ResourceBarProps {
    resources: number;
}

const ResourceBar: React.FC<ResourceBarProps> = ({ resources }) => {
    return (
        <div className="flex justify-between items-center bg-gray-200 px-4 py-2">
            <p className="text-lg font-bold">Resources: {resources}</p>
        </div>
    );
};

export default ResourceBar;