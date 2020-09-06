import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Comments from "../Comments/Comments";
/* Material ui import */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

/* Material ui  */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
/* Material ui  */

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  style: { width: "70rem", height: "10rem" },
};

const PostDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    fetch(postUrl)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const { title, body } = post;

  return (
    <div style={{ backgroundColor: "#F0F2F5" }}>
      {/* Metarial Ui Included start */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {/* Metarial Ui Included end */}

      {/* Custom Code */}
      <Box mt={5} display="flex" justifyContent="center">
        <Box p={3} borderColor="#b4b4b4" {...defaultProps}>
          <strong className="title">
            <span className="idclass">{id}.</span> {title}
          </strong>
          <Box py={2}>
            <p className="body">{body}</p>
          </Box>
        </Box>
      </Box>

      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          width: "350px",
          borderBottom: "2px solid black",
        }}
      >
        Comments Down
      </h1>
      <div style={{ width: "80%", margin: "auto" }}>
        {" "}
        <Comments key={id} postId={id}></Comments>
      </div>
    </div>
  );
};

export default PostDetail;
