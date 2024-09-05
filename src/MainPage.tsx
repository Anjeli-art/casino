import s from "./MainPage.module.css";
import arrowGame from "./assets/images/arrowGame.svg"
import {Link} from "react-router-dom";

type MainType = {
    handleBurgerClick: (isOpenBurger: boolean) => void
}

export const MainPage = (props: MainType) => {
    const {handleBurgerClick} = props
    return (
        <section className={s.general}>
            <div className={s.container}>
                <div className={s.generalInner}>
                    <div className={s.generalArrow}>
                        <img className={s.arrow} src={arrowGame} alt=""/>
                    </div>
                    <Link to="/games">
                        <button className={s.buttonMain} onClick={() => handleBurgerClick(false)}>
                            ИГРАТЬ
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
