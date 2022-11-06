import React from 'react';
import "../styles/modalWin.scss";
import InputValid from "./InputValid";
import InputMask from "./InputMask";

const Popup = ({active, setActive, vacancy}) => {
    if (vacancy != undefined)
    return (
        <article
            className={active ? "modal" : "none-active"}
            onClick={() => setActive(false)}
        >
            <section
                className="modal-container"
                onClick={e => e.stopPropagation()}
            >
                <section className="grid-modal">
                    <article className="pd info">
                        <div className="info-about-work">
                            <h1 className={"n-vacancy"}>{vacancy.name}</h1>
                            <p>{vacancy.salary}</p>
                        </div>

                        <div className="description">
                            Необходим пекарь, обучение проходит 2 месяца, с заработной платой в 14 тыс. рублей после обучения до 40 тыс. рублей
                        </div>

                        <div className="demand">
                            <h3>Требования</h3>
                            <div className="demand-item">
                                <p className="name-demand">Возраст</p>
                                <p className="value-demand">от 20 до 60</p>
                            </div>

                            <div className="demand-item">
                                <p className="name-demand">Опыт</p>
                                <p className="value-demand">не требуется</p>
                            </div>

                            <div className="demand-item">
                                <p className="name-demand">Возраст</p>
                                <p className="value-demand">от 20 до 60</p>
                            </div>
                        </div>
                    </article>
                    <img src={vacancy.image} alt=""/>

                    <article className="input-box pd">
                        <h2>Оставить заявку</h2>
                        <div className="input">
                            <p>Введите имя</p>
                            <InputValid placeholder={"Введите имя"}/>
                        </div>

                        <div className="input">
                            <p>Введите номер телефона</p>
                            <InputMask/>
                        </div>

                        <div className="input">
                            <p>Укажитие дату рождения</p>
                            <input
                                type="date"
                                className="custom-single-line-input"
                                max={"2004-31-12"}
                            />
                        </div>

                        <button className="button">Отправить</button>
                    </article>
                </section>

            </section>
        </article>
    );
};

export default Popup;