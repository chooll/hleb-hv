import React from 'react';
import imageHlebProduct from '../styles/image/hleb-ind.png'
import "../styles/infoblock.scss"
import "../styles/global-style.scss"

const InformationBlock = ({information}) => {
    return (
        <div id="about" className={"information-block"}>
            <div className="c-block">
                <img src={imageHlebProduct} alt=""/>
                <div className="information-text-block">
                    <h2 className={"h-custom"}>{information.header}</h2>
                    {
                        information.moreInformation.map( (el, index) =>
                            <p key={index}>{el}</p>
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default InformationBlock;