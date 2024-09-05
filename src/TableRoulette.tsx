import {useState} from 'react';
import {RouletteTable} from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';
import {IOnBetParams} from "react-casino-roulette/dist/components/RouletteTable";

export const TableRoulette = () => {
    const [bets, setBets] = useState({});

    const handleBet = (betData: IOnBetParams) => {
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
