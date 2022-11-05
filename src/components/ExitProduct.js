import React from 'react';
import "../styles/exit-product.scss";
import "../styles/infoblock.scss";

const ExitProduct = () => {
    return (
        <section className={"product-exit"}>

            <div className="c-block">
                <h1 className="h-custom">Наша продукция</h1>
                <div className="grid-product">
                    <article className="grid-element-product">
                        <img src="product-image/r_bread.png" alt=""/>
                        <p>Ржанной хлеб</p>
                    </article>

                    <article className="grid-element-product">
                        <img src="product-image/p_bread.png" alt=""/>
                        <p>Пшеничный хлеб</p>
                    </article>

                    <article className="grid-element-product">
                        <img src="product-image/pechen.png" alt=""/>
                        <p>Изделия из слоенного теста</p>
                    </article>

                    <article className="grid-element-product">
                        <img src="product-image/vatrushka.png" alt=""/>
                        <p>Многоштучные изделия</p>
                    </article>

                    <article className="grid-element-product">
                        <img src="product-image/baget.png" alt=""/>
                        <p>Булочные изделия из высшего сорта муки</p>
                    </article>

                </div>
            </div>

        </section>
    );
};

export default ExitProduct;