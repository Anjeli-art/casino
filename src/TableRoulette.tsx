import {useState} from 'react';
import {RouletteTable} from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';

type BetDataType = {
    bet: string;
    id: string;
    payload: string[]
}

export const TableRoulette = () => {
    const [bets, setBets] = useState({});

    const handleBet = (betData: BetDataType) => {
        const {id} = betData;

        setBets((prevState) => ({
            ...prevState,
            [id]: {
                icon: 'https://cdn-icons-png.flaticon.com/512/10095/10095709.png',
            },
        }));
    }
    return (
        <div style={{maxWidth: 800, margin: 'auto'}}>
            <RouletteTable bets={bets} onBet={handleBet}/>
        </div>
    )
}
