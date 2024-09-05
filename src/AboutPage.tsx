import s from "./AboutPage.module.css";

export const AboutPage = () => {
    return (
        <section className={s.about}>
            <div className={s.container}>
                <div className={s.aboutInner}>
                    <h2 className={s.aboutSubtitle}>Добро пожаловать в Olympix – ваше
                        лучшее казино для захватывающих игр и выигрышей!</h2>
                    <p className={s.aboutText}>
                        В Olympix мы гордимся тем, что предоставляем
                        нашим игрокам исключительно честный и безопасный игровой опыт.
                        Наше казино использует передовые технологии и алгоритмы для
                        обеспечения прозрачности всех игровых процессов, чтобы вы могли
                        быть уверены в справедливости каждого раунда.
                    </p>
                    <p className={s.aboutText}>
                        Мы понимаем, как важно для вас получать
                        свои выигрыши быстро и без задержек.
                        Поэтому мы гарантируем оперативные выплаты,
                        чтобы вы могли наслаждаться своими победами сразу же.
                        В Olympix вы можете выбрать наиболее удобный для вас способ
                        вывода средств – будь то банковская карта, криптовалюта или электронные кошельки.
                    </p>
                    <p className={s.aboutText}>
                        Наша команда всегда готова помочь вам и обеспечить
                        наилучший сервис. Присоединяйтесь к
                        нам в Olympix и погружайтесь в мир
                        непревзойденного азарта и невероятных выигрышей!
                    </p>
                </div>
            </div>
        </section>
    )
}
