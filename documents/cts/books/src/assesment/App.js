import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Books from "./components/books";
import { Route, Switch, Redirect } from "react-router-dom";
import BookDetails from "./components/book-details";
import PageNotFound from "./components/page-not-found";

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        {/*without using exact  use switch*/}
        <Route path="/books" exact component={Books} />
        <Route path="/books/:id?" component={BookDetails} />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Redirect from="/home" to="/" /> */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
