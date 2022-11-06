import React from 'react';

const Comment = ({comment}) => {
    return (
        <article className="comment">
            <div className="name-user-block">
                <h3 className="name-user">{comment.nameuser}</h3>
                <div className="rating-comment">
                </div>
            </div>
            <p>{comment.commenttext}</p>
        </article>
    );
};

export default Comment;