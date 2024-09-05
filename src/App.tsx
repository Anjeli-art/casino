import {useState} from 'react'
import s from './App.module.css'
import logo from "./assets/images/logo.png"
import burger from "./assets/images/burger.svg"
import close from "./assets/images/close-button.svg"
import {MainPage} from "./MainPage";
import {GamePage} from "./GamePage";
import {AboutPage} from "./AboutPage";
import {Link, Route, Routes} from "react-router-dom"
import {PromoPage} from "./PromoPage";
import {BonusPage} from "./BonusPage";
import {SupportPage} from "./SupportPage";

function App() {
    const [isOpenBurger, setIsOpenBurger] = useState(false)

    const handleBurgerClick = (isOpenBurger: boolean) => {
        setIsOpenBurger(isOpenBurger)
    }

    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.headerInner}>
                        <Link className={s.logo} to="/">
                            <img className={s.logoImg} src={logo} alt=""/>
                        </Link>
                        <nav className={s.menu}>
                            {
                                isOpenBurger ?
                                    <button className={s.burgerButton} onClick={() => handleBurgerClick(false)}>
                                        <img className={s.burgerImg} src={close} alt=""/>
                                    </button> :
                                    <button className={s.burgerButton} onClick={() => handleBurgerClick(true)}>
                                        <img className={s.burgerImg} src={burger} alt=""/>
                                    </button>
                            }
                            <ul className={`${s.menuList} ${isOpenBurger ? s.menuListActive : ''}`}>
                                <li className={s.menuItem} onClick={() => handleBurgerClick(false)}>
                                    <Link className={s.menuLink} to="/games">ИГРЫ</Link>
                                </li>
                                <li className={s.menuItem} onClick={() => handleBurgerClick(false)}>
                                    <Link className={s.menuLink} to="/promo">ПРОМО</Link>
                                </li>
                                <li className={s.menuItem} onClick={() => handleBurgerClick(false)}>
                                    <Link className={s.menuLink} to="/bonus">БОНУСЫ</Link>
                                </li>
                                <li className={s.menuItem} onClick={() => handleBurgerClick(false)}>
                                    <Link className={s.menuLink} to="/about">О НАС</Link>
                                </li>
                                <li className={s.menuItem} onClick={() => handleBurgerClick(false)}>
                                    <Link className={s.menuLink} to="/support">ПОДДЕРЖКА</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<MainPage handleBurgerClick={handleBurgerClick}/>}/>
                <Route path="/games" element={<GamePage/>}/>
                <Route path="/promo" element={<PromoPage/>}/>
                <Route path="/bonus" element={<BonusPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/support" element={<SupportPage/>}/>
            </Routes>
        </div>
    )
}

export default App
