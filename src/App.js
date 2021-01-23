import "./App.css";
import history from "./ultis/history";
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import { SRoute, LoginRoute, PublicRoute } from "./containers/CustomRoutes";

import Home from "./containers/Home/Home";
import Myshop from "./containers/MyShop/MyShop";
import AddBook from "./containers/AddBook/AddBook";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound";
import CheckOut from "./containers/CheckOut/CheckOut";
import Profile from "./containers/Profile/Profile";
import ProductDetail from "./containers/ProductDetail/ProductDetail"
import Cart from "./containers/Cart/Cart"

function App() {
  return (
    <>
      <Router>
        <Switch history={history}>
          <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <SRoute path="/check-out" exact component={CheckOut}></SRoute>
          <SRoute path="/cart" exact component={Cart}></SRoute>
          <SRoute path="/profile" exact component={Profile}></SRoute>
          <PublicRoute path="/not-found" component={NotFound}></PublicRoute>
          <PublicRoute path="/" exact component={Home}></PublicRoute>
          <Route path="/book-detail/:id" exact>
            <ProductDetail/>
          </Route>
          <SRoute path="/my-shop" exact component={Myshop}></SRoute>
          <SRoute path="/add-book" exact component={AddBook}></SRoute>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
