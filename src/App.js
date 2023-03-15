import { Link, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/">
        <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
