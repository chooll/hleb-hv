import React, {useState} from 'react';
import "../styles/modalWin.scss";
import InputValid from "./InputValid";
import InputMask from "./InputMask";
import {sendVacancy} from "../http/userAPI";

const Popup = ({active, setActive, vacancy}) => {

    const [name, setName] = useState("");
    const [dateBirth, setDateBirth] = useState("")
    const [phone, setPhone] = useState("");
    const [nameVacancy, setNameVacancy] = useState("");

    const sendVacancyEnter = async () => {
        let n = name.split(' ')

        if (new Date(dateBirth) > new Date('1960-12-31') && new Date(dateBirth) < new Date('2004-12-31')) {
            if (name.length >= 2 && phone.length >= 14) {
                let ph = phone.replace(/[^0-9]/g,"")
                let otch = name.length == 3 ? name[2] : "";
                sendVacancy(n[0], n[1], otch, dateBirth, ph, nameVacancy)
            }
            else {
                alert ('Заполните все поля')
            }
        }
        else {
            alert ('Ваш возраст слишком мал');
        }
    }

    if (vacancy != undefined)
    return (
        <article
            className={active ? "modal" : "none-active"}
            onClick={() => {
                setActive(false)
            }}
            onLoad={() => {setNameVacancy(vacancy.name)}}
        >
            <section
                className="modal-container"
                onClick={e => e.stopPropagation()}
            >
                <section className="grid-modal">
                    <article className="pd info">
                        <div className="info-about-work">
                            <h1 className={"n-vacancy"} onLoad={() => setNameVacancy(vacancy.name)}>{vacancy.name}</h1>
                            <p>{vacancy.salary}</p>
                        </div>

                        <div className="description">
                            {vacancy.descirpt}
                        </div>

                        <div className="demand">
                            <h3>Требования</h3>
                            <div className="demand-item">
                                <p className="name-demand">Возраст</p>
                                <p className="value-demand">{vacancy.age}</p>
                            </div>

                            <div className="demand-item">
                                <p className="name-demand">Опыт</p>
                                <p className="value-demand">{vacancy.expirience}</p>
                            </div>

                            <div className="demand-item">
                                <p className="name-demand">Режим работы</p>
                                <p className="value-demand">{vacancy.work}</p>
                            </div>
                        </div>
                    </article>
                    <img src={vacancy.image} alt=""/>

                    <article className="input-box pd">
                        <h2>Оставить заявку</h2>
                        <div className="input">
                            <p>Введите имя</p>
                            <InputValid value={name} setValue={setName} placeholder={"Введите ФИО"}/>
                        </div>

                        <div className="input">
                            <p>Введите номер телефона</p>
                            <InputMask inpValue={phone} setInputValue={setPhone}/>
                        </div>

                        <div className="input">
                            <p>Укажитие дату рождения</p>
                            <input
                                type="date"
                                className="custom-single-line-input"
                                max="2004-12-31"
                                min="1950-12-31"
                                value={dateBirth}
                                onChange={(event) => setDateBirth(event.target.value)}
                            />
                        </div>

                        <div className="button-flex" style={{"display": "flex", "gap": "20px"}}>
                            <button
                                className="button"
                                onClick={() => sendVacancyEnter()}

                            >Отправить</button>

                            <button
                                className="button close"
                                onClick={() => setActive(false)}
                            >Закрыть</button>
                        </div>


                    </article>
                </section>

            </section>
        </article>
    );
};

export default Popup;