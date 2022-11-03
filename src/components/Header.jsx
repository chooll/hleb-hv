import React from 'react';
import '../styles/header.scss'
import rigthArray from "./right-arrow-svgrepo-com.svg"

const Header = () => {
    return (
        <div className="header">

            <div className="content-block">
                <div className="name-company">
                    <p className="text-company">Хвойная</p>
                    <p className="text-company">Хлеб</p>
                </div>

                <div>
                    <img className={"array-rigth"} src={rigthArray} alt=""/>
                </div>

                <div className="info-company">
                    <p>Региональныое промышленное предприятие Новгородской Области</p>
                    <section className="nav-bar">
                        <a href="#about">О нас</a>
                        <a href="#vacancy">Вакансии</a>
                        <a href="#comment">Отзывы</a>
                    </section>
                </div>

            </div>


        </div>
    );
};

export default Header;