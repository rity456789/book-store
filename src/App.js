import "./App.css";
import history from "./ultis/history";
import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { SRoute } from "./containers/CustomRoutes";

import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch history={history}>
          <SRoute path="/login" exact component={Login}></SRoute>
          <SRoute path="/register" exact component={Register}></SRoute>
          <SRoute path="/not-found" component={NotFound}></SRoute>
          <SRoute path="/" exact component={Home}></SRoute>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
