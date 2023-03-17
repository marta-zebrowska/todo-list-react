import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./features/Navigation";

export default () => (
  <HashRouter>
    <Navigation />
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
  </HashRouter>
);
