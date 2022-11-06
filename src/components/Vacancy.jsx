import React, {useState} from 'react';
import "../styles/vacancy.scss";
import VacancyBlock from "./VacancyBlock";
import f_pecar from "../styles/image/f_pecar.png"
import Popup from "./Popup";

function Vacancy({vacancy, setVacancyReturn, setActiveModal}) {
    const {name, image, salary} = vacancy;

    const returnVacancy = () => {
        setVacancyReturn(vacancy)
        setActiveModal(true);
    }

    return (
        <div
            className='vacancy'
            onClick={() => returnVacancy()}
        >

            <div className="image-block">
                <img className='img-vacancy' src={image} alt="" />
                <div className="info-block-vacancy">
                    <h2 className="name-vacancy">{name}</h2>
                    <p> {salary}</p>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;