import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Saved />
          </Route>
          <Route exact path="/books/:id">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;