import React, {useCallback, useEffect, useState} from 'react';
import "../styles/global-style.scss";
import "../styles/comment-block.scss";
import Comment from "./Comment";
import InputMask from "./InputMask";
import InputValid from "./InputValid";
import {getAllComent, sendComment} from "../http/userAPI";
import {isNotCensureText} from "../Classes/Censure";

const CommentBlock = ({comments, setComments, loadData}) => {

    const [nameUser, setNameUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const [comment, setComment] = useState("")
    const [send, setSend] = useState(0);

    useEffect(  () =>  {
        setTimeout(() => {
            getAllComent()
                .then (el => el)
                .then (json => setComments(json))
                .catch(
                    error => console.log(error)
                )
        }, 1000);
    }, [comments]);


    const sendCommentary = async () => {
        if (nameUser != "" && phoneUser != "" && comment != "" && phoneUser.length > 14) {
            if (!isNotCensureText(nameUser) && !isNotCensureText(comment)) {
                sendComment(nameUser, comment)
                setNameUser("");
                setPhoneUser("");
                setComment("");
                setSend(true);
            } else {
                alert ('Не используйте оскорбления')
            }

        } else {
            alert('Заполните все поля верно')
        }
    }

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
                                comments !== undefined ? comments.map ((el, index) => {
                                    return <Comment comment={el} key={index}/>
                                }) : <p>Загрузка подождите</p>
                            }
                        </div>
                    </div>

                    <div className="send-comment">
                        <h1 className="h-custom">Оставить отзыв</h1>
                        
                        <article className="input-block">
                            <p>Введите номер телефона</p>
                            <InputMask inpValue={phoneUser} setInputValue={setPhoneUser}/>
                        </article>

                        <article className="input-block">
                            <p>Введите имя</p>
                            <InputValid value={nameUser} setValue={setNameUser} placeholder={"Введите имя"}/>
                        </article>

                        <article className="input-block">
                            <p>Отзыв</p>
                            <InputValid value={comment} setValue={setComment} placeholder={"Введите отзыв"}/>
                        </article>

                        <button
                            className="button"
                            onClick={() => sendCommentary()}
                        >Отправить</button>
                    </div>
                </article>



            </div>
        </div>
    );
};

export default CommentBlock;