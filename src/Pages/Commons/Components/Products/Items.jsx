import React from 'react';
import {Link} from 'react-router-dom'

function Items() {
    return(
        <div className="col-lg-9">
            <div className="product_top_bar">
                <div className="left_dorp">
                <select className="sorting">
                    <option value={1}>Default sorting</option>
                    <option value={2}>Default sorting 01</option>
                    <option value={4}>Default sorting 02</option>
                </select>
                <select className="show">
                    <option value={1}>Show 12</option>
                    <option value={2}>Show 14</option>
                    <option value={4}>Show 16</option>
                </select>
                </div>
            </div>
            <div className="latest_product_inner">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <Link to="/show_product">
                                <img className="card-img" src= { require("../../../../Assets/img/product/inspired-product/i1.jpg") } alt='' />
                            </Link>
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i2.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i3.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i4.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i5.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i6.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i7.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i8.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                        <div className="product-img">
                            <img className="card-img" src={ require("../../../../Assets/img/product/inspired-product/i2.jpg")} alt='' />
                            <div className="p_icon">
                            <a href="#">
                                <i className="ti-eye" />
                            </a>
                            <a href="#">
                                <i className="ti-heart" />
                            </a>
                            <a href="#">
                                <i className="ti-shopping-cart" />
                            </a>
                            </div>
                        </div>
                        <div className="product-btm">
                            <a href="#" className="d-block">
                            <h4>Latest men’s sneaker</h4>
                            </a>
                            <div className="mt-3">
                            <span className="mr-4">$25.00</span>
                            <del>$35.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Items