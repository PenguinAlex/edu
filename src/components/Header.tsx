import React from 'react';
import logo from '../assets/images/logo.svg'
const Header: React.FC = () => {
    return (
        <header className="flex justify-between  items-center py-4">
            <img src={logo} alt="Adventure Communist" className="h-8" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open Shop
            </button>
        </header>
    );
};

export default Header;