import React, {useState} from 'react';
import Header from "./components/Header";
import ResourceBar from "./components/ResourceBar";
import UpgradeCard from "./components/UpgradeCard";
import ProductionCard from "./components/ProductionCard";
import Footer from "./components/Footer";
import MoneyButton from "./components/MoneyButton";

const App = () => {
    const [money, setMoney] = useState(0)
    const handleMoneyClick = () => {
        setMoney(money + 1);
    };
    const handleBuyUpgrade = () => {
        // обработчик клика на кнопке "Купить"
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