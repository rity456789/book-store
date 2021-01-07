import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const SRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div id="wrapper" className="wrapper-with-transparent-header">
          <header id="header-container" className="fullwidth">
            <Header home={true}></Header>
          </header>
          <div className="clearfix" />

          <div className="content">
            <Component {...props}></Component>
          </div>

          <Footer></Footer>
        </div>
      )}
    ></Route>
  );
};
