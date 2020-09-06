import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/:id'>
            <PostDetail></PostDetail>
         
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
