import React, {useState} from 'react';
import "../styles/infoblock.scss";
import Vacancy from './Vacancy';
import rigthRigth from "./right-arrow-svgrepo-com.svg";

const VacancyBlock = (vacancy) => {
    const [totalPage, setTotalPage] = useState([0, 2]);
    const [showArrow, setShowArrow] = useState(vacancy.length > 3);
    return (
        <section id={"vacancy"} className={"vacancy-block"}>
            <div className="c-block">
                <article className="grid-vacancy">
                    <div className="text-vacancy">
                        <h1 className="h-custom">Вакансии</h1>
                        <p>Если вы молодой энергичный, и ищите себе работу, наше предприятие может вам ее предложить, высокая региональная зарплата, и бесплатное обучение</p>
                    </div>

                    {/* Только три вакансии */}
                    <div className="vacancy-list">
                        <img src={rigthRigth} className="arrow-left"/>
                        <Vacancy vacancy={vacancy[0]}/>

                        {/*    <Vacancy/>*/}
                        {/*    <Vacancy/>*/}
                        {/*    <Vacancy/>*/}
                        <img src={rigthRigth} className="arrow-rigth"/>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default VacancyBlock;