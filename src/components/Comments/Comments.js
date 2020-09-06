import React, { useState, useEffect } from 'react';
import CommentShow from './CommentShow';

const Comments = (props) => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>
            {
                comments.map(comment => <CommentShow comment ={comment}></CommentShow>)
            }
        </div>
    );
};

export default Comments;