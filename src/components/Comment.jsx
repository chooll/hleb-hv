import React from 'react';

const Comment = ({comment}) => {
    return (
        <article className="comment">
            <div className="name-user-block">
                <h3 className="name-user">{comment.name}</h3>
                <div className="rating-comment">
                </div>
            </div>
            <p>{comment.textComment}</p>
        </article>
    );
};

export default Comment;