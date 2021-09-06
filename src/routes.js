import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu";
import Albums from "pages/album";
import Posts from "pages/post";
import Todos from "pages/todos";
const Routes = () => (
  <>
    <Menu />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Posts />} />
        <Route path="/albums" component={() => <Albums />} />
        <Route path="/todos" component={() => <Todos />} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;

/*
 <Route exact path="/" component={() => <Home />} />
 */
