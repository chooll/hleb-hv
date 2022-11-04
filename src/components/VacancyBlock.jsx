import React, {useState} from 'react';
import "../styles/infoblock.scss";
import "../styles/global-style.scss";
import Vacancy from './Vacancy';
import rigthRigth from "./right-arrow-svgrepo-com.svg";

const VacancyBlock = ({vacancy}) => {

    const [step, setStep] = useState(0);
    const [showArrow, setShowArrow] = useState(vacancy.length > 3);

    const [leftArrow, setLeftArrow] = useState(false);
    const [rigthArrow, setRigthArrow] = useState(vacancy.length > 3);

    const getPageVacancy = () => {
        return vacancy.filter (
            (el, index) => index >= step * 2 && index <= step * 2 + 2
        );
    }

    // Увелениче шага
    const addPageShow = () => {
        setStep(step + 1);
        setLeftArrow(true);
        setRigthArrow(step === Math.floor(vacancy.length / 3 - 1)? false : true);
    }

    // Уменьшения шага
    const subPageShow = () => {
        setStep(step - 1);
        setLeftArrow(step === 1 ? false : true);
        setRigthArrow(step === Math.floor(vacancy.length / (3 - 1))? false : true)
        // console.log(Math.floor(vacancy.length / 3 - 1), " -> ", vacancy.length / 3 - 1)

    }

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
                        <img src={rigthRigth} className={ showArrow && leftArrow ? "arrow-left" : "none-visible"}
                            onClick={subPageShow}
                        />

                        {
                            getPageVacancy().map ((el, index) => {
                                return <Vacancy vacancy={el} key={index}/>
                            })
                        }

                        <img src={rigthRigth} className={ showArrow && rigthArrow ? "arrow-rigth" : "none-visible"}
                            onClick={addPageShow}
                        />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default VacancyBlock;