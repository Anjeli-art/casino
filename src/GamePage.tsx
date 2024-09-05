import s from "./GamePage.module.css";
import {TableRoulette} from "./TableRoulette";
import {Wheel} from "./Wheel";

export const GamePage = () => {
    return (
        <section className={s.game}>
            <div className={s.container}>
                <div className={s.gameInner}>
                    <Wheel/>
                    <TableRoulette/>
                </div>
            </div>
        </section>
    )
}
