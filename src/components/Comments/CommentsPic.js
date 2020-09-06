import React, { useState, useEffect } from "react";

const CommentsPic = (props) => {
  const [userPic, setUserPic] = useState({});
  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/photos/${props.id}`)
      .then((res) => res.json())
      .then((data) => setUserPic(data));
  }, []);

  const style = {
    width: "60px",
    borderRadius: "50%",
  };
  return (
    <div>
      <img style={style} src={userPic.thumbnailUrl} alt="" />
    </div>
  );
};

export default CommentsPic;
