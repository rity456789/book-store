import React from "react";
import background from "../../assets/images/banner-1.jpg";

function Home() {
  return (
    <>
      <div>
        <section
          className="box box-image bg-light text-white"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <header className="wow fadeInUp" data-wow-delay=".1s">
              <div className="row justify-content-center pt-5 text-center">
                <div className="col-lg-8">
                  <h1 className="mb-0">Everything you love</h1>
                  <p>
                    Find new items now, with great deals and limited time offers
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        {/* Products grid */}
        <section className="bg-white p-0 sider sider-left">
          <div className="container">
            <div className="row">
              {/* Left side filters */}
              <div
                className="col-lg-3 sidebar sidebar-mobile pr-lg-5"
                id="open-mobile-filters"
              >
                <div className="sidebar-content pt-lg-5">
                  {/* Sidebar header */}
                  <div className="sidebar-header clearfix d-lg-none">
                    <button
                      type="button"
                      className="close toggle-show p-3"
                      data-show="open-mobile-filters"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  {/* Search */}
                  <div className="mb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          id="button-addon2"
                        >
                          Go!
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Slider range */}
                  <div className="mb-4">
                    <div className="pt-4">
                      <div className="d-flex justify-content-between">
                        <span>Price</span>
                        <span>
                          $ <b className="price-value" />
                        </span>
                      </div>
                      <input
                        type="range"
                        className="custom-range price-range"
                        id="customRange1"
                        min={0}
                        max={500}
                        step={5}
                      />
                      <div className="d-flex justify-content-between">
                        <small>$ 0</small>
                        <small>$ 500</small>
                      </div>
                    </div>
                  </div>
                  {/* Checkbox group */}
                  <div className="mb-4">
                    <a
                      className="btn btn-sm btn-clean px-0 py-1"
                      data-toggle="collapse"
                      href="#collapseExampleCheckbox"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExampleCheckbox"
                    >
                      <span>Checboxes</span>
                    </a>
                    <div className="collapse show" id="collapseExampleCheckbox">
                      <ul className="list-group list-group-clean pt-2">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckGroup1"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckGroup1"
                            >
                              Men
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            14
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckGroup2"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckGroup2"
                            >
                              Woman
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            250
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckGroup3"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckGroup3"
                            >
                              Kid's
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            313
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory1"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory1"
                            >
                              Clothing
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            150
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory2"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory2"
                            >
                              Shoes
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            184
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory3"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory3"
                            >
                              Bags
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            164
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory4"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory4"
                            >
                              Accessories
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            212
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckCategory5"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customCheckCategory5"
                            >
                              Collection
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            50
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Radio buttons group */}
                  <div className="mb-4">
                    <a
                      className="btn btn-sm btn-clean px-0 py-1"
                      data-toggle="collapse"
                      href="#collapseExampleRadio"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExampleRadio"
                    >
                      <span>Radio buttons</span>
                    </a>
                    <div className="collapse show" id="collapseExampleRadio">
                      <ul className="list-group list-group-clean pt-2">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-radio">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customRadio1"
                            >
                              In stock
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            1250
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-radio">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customRadio2"
                            >
                              Upcomming
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            245
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="custom-control custom-control-sm custom-radio">
                            <input
                              type="radio"
                              id="customRadio3"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customRadio3"
                            >
                              Presale
                            </label>
                          </span>
                          <span className="badge badge-light badge-pill">
                            86
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Checkbox group */}
                  <div className="mb-4">
                    <a
                      className="btn btn-sm btn-clean px-0 py-1 mb-2"
                      data-toggle="collapse"
                      href="#collapseExampleSize"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExampleSize"
                    >
                      <span>Sizes</span>
                    </a>
                    <div className="collapse show" id="collapseExampleSize">
                      <div className="d-flex justify-content-between">
                        <span
                          className="btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-outline-gray active">
                            <input type="checkbox" defaultChecked /> S
                          </label>
                        </span>
                        <span
                          className="btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-outline-gray active">
                            <input type="checkbox" defaultChecked /> M
                          </label>
                        </span>
                        <span
                          className="btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-outline-gray active">
                            <input type="checkbox" /> L
                          </label>
                        </span>
                        <span
                          className="btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label className="btn btn-outline-gray active">
                            <input type="checkbox" /> XL
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Products content */}
              <div className="col-lg-9 bg-white pl-lg-5">
                {/* Products header */}
                <div className="pt-3 pt-lg-5 mb-3 mb-lg-4">
                  <div className="d-flex justify-content-between">
                    {/* Left */}
                    <div>
                      <div className="form-inline">
                        <div className="form-group mb-0">
                          <select
                            className="form-control form-control-sm"
                            id="exampleFormControlSelect1"
                          >
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                            <option>All</option>
                          </select>
                          <label
                            htmlFor="exampleFormControlSelect1"
                            className="ml-3 d-none d-lg-block"
                          >
                            <small>Showing all 24 of 128 products</small>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Right */}
                    <div>
                      <div className="form-inline">
                        <div className="mr-2">
                          <a
                            href="products-grid-flat.html"
                            className="btn btn-sm  text-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Grid view"
                          >
                            <i className="fa fa-th-large" />
                          </a>
                          <a
                            href="products-list-flat.html"
                            className="btn btn-sm "
                            data-toggle="tooltip"
                            data-placement="top"
                            title="List view"
                          >
                            <i className="fa fa-list-ul" />
                          </a>
                        </div>
                        <div className="form-group mb-0">
                          <label
                            htmlFor="exampleFormControlSelect2"
                            className="mr-3 d-none d-lg-block"
                          >
                            <small>Sort by</small>
                          </label>
                          <select
                            className="form-control form-control-sm"
                            id="exampleFormControlSelect2"
                          >
                            <option>Name</option>
                            <option>Price</option>
                          </select>
                        </div>
                        <div className="d-lg-none ml-2">
                          <button
                            className="btn btn-primary btn-sm toggle-show"
                            data-show="open-mobile-filters"
                          >
                            <strong>
                              <i className="icon icon-text-align-center" />
                              <span className="d-none d-sm-inline-block">
                                Filters
                              </span>
                            </strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Products collection */}
                <div className="row gutters-mobile">
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-1.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Coretta</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$490</span>
                          <s>$877</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-danger">
                          50%
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Tonya</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$419</span>
                          <s>$958</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-3.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Raven</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$502</span>
                          <s>$857</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-4.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-dark">
                          Last offer
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Mufi</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$584</span>
                          <s>$838</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-5.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Audrie</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$470</span>
                          <s>$937</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-6.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Kira</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$579</span>
                          <s>$915</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-7.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Dianne</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$526</span>
                          <s>$1111</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-8.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <span className="card-badge badge badge-success">
                          New
                        </span>
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Chery</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$424</span>
                          <s>$901</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-9.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Willi</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$494</span>
                          <s>$1088</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-10.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Ofelia</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$625</span>
                          <s>$876</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-11.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Janeta</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$626</span>
                          <s>$1140</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="card card-fill mb-2 mb-lg-4">
                      <div className="card-image">
                        <img
                          src="assets/images//demo/product-12.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body p-2 p-lg-3 text-center">
                        <h4 className="card-title mb-0">
                          <a href="product-flat.html">Hannie</a>
                        </h4>
                        <small className="pre-label text-muted">
                          <span>$518</span>
                          <s>$803</s>
                        </small>
                      </div>
                      <div className="px-3 pb-3">
                        <div className="d-flex justify-content-between">
                          <a
                            href="#"
                            className="px-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Whishlist"
                          >
                            <i className="icon icon-heart font-size-lg text-muted" />
                          </a>
                          <a
                            href="#"
                            className="px-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to cart"
                          >
                            <i className="icon icon-cart font-size-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-3 pb-lg-5">
                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center py-3 py-lg-4">
                      <li className="page-item disabled">
                        <a
                          className="page-link page-link-first"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Prev
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
