import s from "./MainPage.module.css";
import arrowGame from "./assets/images/arrowGame.svg"

export const MainPage = () => {
    return (
        <section className={s.general}>
            <div className={s.container}>
                <div className={s.generalInner}>
                    <div className={s.generalArrow}>
                        <img className={s.arrow} src={arrowGame} alt=""/>
                    </div>
                    <button className={s.buttonMain}>
                        ИГРАТЬ
                    </button>
                </div>
            </div>
        </section>
    )
}
