import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import Albums from "pages/album";
import Posts from "pages/post";
import Todos from "pages/todos";
import Home from "pages/home";
const Routes = () => (
  <>
    <Menu />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/posts" component={() => <Posts />} />
        <Route path="/albums" component={() => <Albums />} />
        <Route path="/todos" component={() => <Todos />} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
