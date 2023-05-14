import { useEffect, useState } from "react";

interface ProductionProps {
    productionRate: number;
}

export const useProduction = ({ productionRate }: ProductionProps) => {
    const [money, setMoney] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMoney((prevMoney) => prevMoney + productionRate);
        }, 1000);

        return () => clearInterval(interval);
    }, [productionRate]);

    return { money };
};