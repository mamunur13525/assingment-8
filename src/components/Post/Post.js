import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Post.css";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";

/* Metarial Content import Start*/
const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    style: { width: "70rem", height: "10rem" },
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  };
/* Metarial Content import End*/

const Post = (props) => {
  const { body, id, title, userId } = props.post;
  const classes = useStyles();


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

          <Box mt={2}>
              <Link to={`/${id}`}>
                    <Button  mt={2} variant="contained" color="primary">
                        <b> See More....</b>
                    </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      
    </div>
  );
};

export default Post;
