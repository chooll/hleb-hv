import React from 'react';
import "../styles/infoblock.scss"
import imageHlebProduct from '../styles/image/hleb-ind.png'


const RegionInformation = () => {
    return (
        <div className={"region-information"}>
            <div className="c-block">
                <div className="information-region">
                    <h2 className={"h-custom"}>Мы работаем в Новгородской области, по 3 - регионам</h2>
                    <div className="tables-region">
                        <p>Хвойнинский район</p>
                        <p>Вологодский район</p>
                        <p>Мошинской район</p>
                    </div>
                </div>

                <img className={"photo-regions"} src={imageHlebProduct} alt=""/>

            </div>
        </div>
    );
};

export default RegionInformation;