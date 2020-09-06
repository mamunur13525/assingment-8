import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";




const defaultProps = {
  bgcolor: "#F0F2F5",
  m: 1,
  p: 4,
  style: { width: "60rem", height: "8rem" },
};

const Comments = (props) => {
  const { name, body,email,id } = props.comment;
const [userPic, setUserPic] = useState([])

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=500')
    .then(res => res.json())
    .then(data => setUserPic(data))
  },[])

  const fivePics = userPic.slice(0,1)
  console.log(fivePics)

  return (
    <div >
      {
        fivePics.map(pic =>      
          <Box display="flex" justifyContent="center">
        
            <Box  {...defaultProps}>
                <Box >
                    <img style={{width: "50px", borderRadius: "50%"}} src={pic.thumbnailUrl}></img>
                    </Box>
                    <Box  py={2}>
                            <strong>{name}</strong>
                            <p>email: {email}</p>
                            <p className="body">{body}</p>
                    </Box>
            </Box>
          </Box>)
      }

    </div>
  );
};

export default Comments;
