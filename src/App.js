import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <main className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
