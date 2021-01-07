import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const SRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header></Header>
          <div className="clearfix" />
          <div className="content">
            <Component {...props}></Component>
          </div>
          <Footer></Footer>
        </>
      )}
    ></Route>
  );
};
