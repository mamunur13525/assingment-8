import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Comments from "../Comments/Comments";


const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  style: { width: "70rem", height: "10rem" },
};

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;


  useEffect(() => {
    fetch(postUrl)
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);
  const { title, body } = post;

  return (
    <div>
      {/* Metarial Ui Included */}
      <Box display="flex" justifyContent="center">
        <Box p={3} borderColor="#b4b4b4" {...defaultProps}>
          <strong className="title">
            <span className="idclass">{id}.</span> {title}
          </strong>
          <Box py={2}>
           
            <p className="body">{body}</p>
          </Box>

         
        </Box>
      </Box>
     
      <h1 style={{textAlign:'center'}}>Comments Below Down</h1>
       <div  style={{border: "1px solid black", width: '80%', margin: 'auto'}}> <Comments key={id} postId={id}></Comments>
       </div>
    </div>
  );
};

export default PostDetail;
