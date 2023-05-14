import React, {useState} from 'react';
import Header from "./components/Header";
import ResourceBar from "./components/ResourceBar";
import UpgradeCard from "./components/UpgradeCard";
import ProductionCard from "./components/ProductionCard";
import Footer from "./components/Footer";
import MoneyButton from "./components/MoneyButton";
import {useProduction} from "./hooks/useProduction";

const App = () => {
    const [money, setMoney] = useState(0)
    const {money: production} = useProduction({productionRate: 50})
    const [gain, setGain] = useState(0)
    const handleMoneyClick = () => {
        setMoney(money + 1*gain);
    };
    const handleBuyUpgrade = (cost:number) => {
        if (money>=cost){
            setMoney(money-cost)
        }
    };
    return (
        <div>
            <Header/>
            <ResourceBar resources={money}/>
            <MoneyButton money={money} handleClick={handleMoneyClick} />
            <UpgradeCard name="Upgrade Name" cost={50} description="Upgrade description" handleClick={handleBuyUpgrade} />
            <ProductionCard name="Production Name" count={5} productionRate={10} />

            <Footer />
        </div>
    );
};

export default App;