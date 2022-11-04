import React from 'react';
import "../styles/vacancy.scss";
import VacancyBlock from "./VacancyBlock";
import f_pecar from "../styles/image/f_pecar.png"

function Vacancy({vacancy}) {
    const {name, image, salary} = vacancy;

    return (
        <div className='vacancy'>
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