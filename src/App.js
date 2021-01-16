import "./App.css";
import history from "./ultis/history";
import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { SRoute } from "./containers/CustomRoutes";

import Home from "./containers/Home/Home";
import Myshop from "./containers/MyShop/MyShop";
import AddBook from "./containers/AddBook/AddBook";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound";
import CheckOut from "./containers/CheckOut/CheckOut";
import Profile from "./containers/Profile/Profile";
function App() {
  return (
    <>
      <Router>
        <Switch history={history}>
          <SRoute path="/login" exact component={Login}></SRoute>
          <SRoute path="/check-out" exact component={CheckOut}></SRoute>
          <SRoute path="/profile" exact component={Profile}></SRoute>
          <SRoute path="/not-found" component={NotFound}></SRoute>
          <SRoute path="/" exact component={Home}></SRoute>
          <SRoute path="/my-shop" exact component={Myshop}></SRoute>
          <SRoute path="/add-book" exact component={AddBook}></SRoute>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
