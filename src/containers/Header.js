import React from "react";
import { withRouter, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        {/* <div className="loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Main navigation */}
        <nav className="navbar navbar-expand-lg navbar-sticky navbar-dark dark">
          <div className="container">
            {/* Logo */}
            <NavLink to="/" className="navbar-brand mr-1">
              <img src="assets/svg/reveal-logo.svg" alt="" />
            </NavLink>
            {/* Collapse */}
            <div
              className="collapse navbar-collapse navbar-collapse-sidebar"
              id="mainNavbar"
            >
              {/* Navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Single dropdown */}

                {/* Mega dropdown */}
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="ecommerce"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <div
                    className="dropdown-menu w-100 bg-white border-top"
                    aria-labelledby="ecommerce"
                  >
                    <div className="py-3 px-lg-4 py-lg-5">
                      <div className="container d-block p-0">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="pre-label p-2">Shop</div>
                            <a
                              className="dropdown-item rounded-sm"
                              href="products-grid.html"
                            >
                              <p>Products grid</p>
                              <span className="label">Cards grid preview</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="products-list.html"
                            >
                              <p>Products list</p>
                              <span className="label">Cards list preview</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="products-topbar.html"
                            >
                              <p>Products topbar</p>
                              <span className="label">
                                Card grid with top filters
                              </span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="products-grid-flat.html"
                            >
                              <p>
                                Products grid flat{" "}
                                <span className="badge badge-danger">New</span>
                              </p>
                              <span className="label">
                                Cards with flat filters
                              </span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="products-list-flat.html"
                            >
                              <p>Products list flat</p>
                              <span className="label">
                                Cards with flat filters
                              </span>
                            </a>
                          </div>
                          <div className="col-lg-3">
                            <div className="pre-label p-2">Orders</div>
                            <a
                              className="dropdown-item rounded-sm"
                              href="checkout.html"
                            >
                              <p>Checkout</p>
                              <span className="label">
                                Order checkout example
                              </span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="checkout-login.html"
                            >
                              <p>Login &amp; register</p>
                              <span className="label">Login forms</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="checkout-delivery.html"
                            >
                              <p>Delivery</p>
                              <span className="label">Delivery methods</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="checkout-payment.html"
                            >
                              <p>Payment</p>
                              <span className="label">Payment options</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="checkout-receipt.html"
                            >
                              <p>Receipt</p>
                              <span className="label">
                                Receipt &amp; email confirmation
                              </span>
                            </a>
                          </div>
                          <div className="col-lg-3">
                            <div className="pre-label p-2">Product page</div>
                            <a
                              className="dropdown-item rounded-sm"
                              href="product.html"
                            >
                              <p>Product page</p>
                              <span className="label">Simple preview</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="product-advanced.html"
                            >
                              <p>Product advanced</p>
                              <span className="label">Advanced preview</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="product-flat.html"
                            >
                              <p>
                                Product flat{" "}
                                <span className="badge badge-danger">New</span>
                              </p>
                              <span className="label">Flat preview</span>
                            </a>
                          </div>
                          <div className="col-lg-3">
                            <div className="pre-label p-2">Account</div>
                            <a
                              className="dropdown-item rounded-sm"
                              href="profile.html"
                            >
                              <p>Profile page</p>
                              <span className="label">User profile</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="profile-payment.html"
                            >
                              <p>Payment options</p>
                              <span className="label">Set default payemnt</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="profile-notifications.html"
                            >
                              <p>Notifications</p>
                              <span className="label">Edit alerts</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="profile-orders.html"
                            >
                              <p>My Orders</p>
                              <span className="label">Order history</span>
                            </a>
                            <a
                              className="dropdown-item rounded-sm"
                              href="profile-whishlist.html"
                            >
                              <p>Wishlist</p>
                              <span className="label">Saved products</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Navbar toggler */}
            <div className="d-flex align-items-center">
              <NavLink
                to="check-out"
                className="btn btn-sm btn-primary btn-rounded ml-lg-4 px-3"
              >
                <i className="icon icon-cart" /> Purchase
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon icon-menu" />
              </button>
            </div>
          </div>
        </nav>
        {/* Breadcrumbs */}
      </div>
    </>
  );
}

export default Header;
