import React from 'react';
import "../styles/global-style.scss";
import "../styles/comment-block.scss";
import Comment from "./Comment";
import InputMask from "./InputMask";
import InputValid from "./InputValid";

const CommentBlock = ({comments, loadData}) => {
    return (
        <div
            className="comment-block"
            onLoad={loadData}
        >
            <div className="c-block">

                <article className="grid-comment">

                    <div className="comment-list">
                        <h1 className="h-custom">Отзывы о нас</h1>
                        <div className="overflow-comment">
                            {
                                comments != undefined ? comments.map ((el, index) => {
                                    return <Comment comment={el} key={index}/>
                                }) : 0
                            }
                        </div>
                    </div>

                    <div className="send-comment">
                        <h1 className="h-custom">Оставить отзыв</h1>
                        
                        <article className="input-block">
                            <p>Введите номер телефона</p>
                            <InputMask/>
                        </article>

                        <article className="input-block">
                            <p>Введите имя</p>
                            <InputValid placeholder={"Введите имя"}/>
                        </article>

                        <article className="input-block">
                            <p>Отзыв</p>
                            <InputValid placeholder={"Введите отзыв"}/>
                        </article>

                        <button className="button">Отправить</button>
                    </div>
                </article>



            </div>
        </div>
    );
};

export default CommentBlock;