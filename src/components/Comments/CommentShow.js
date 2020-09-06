import React from "react";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import CommentsPic from "./CommentsPic";
const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 2,
  style: { width: "50rem", height: "8rem" },
  borderRadius: "10px",
};

const CommentShow = (props) => {
  const { body, name, id } = props.comment;
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="start"
          p={3}
          borderColor="#dddddd"
          {...defaultProps}
        >
          <Box py={2}>
            <CommentsPic id={id}></CommentsPic>
          </Box>
          <Box px={2} py={2}>
            <strong className="title">{name}</strong>
            <p className="body">{body}</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CommentShow;
