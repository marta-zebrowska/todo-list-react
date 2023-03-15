import { Link, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";

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
      <Route path="/zadania/:id">
          <TaskPage />
          </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/">
        <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
