import React from 'react'
import {Link} from 'react-router-dom';

function NewProds() {
    return (
        <section className="new_product_area section_gap_top section_gap_bottom_custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <h2><span>new products</span></h2>
                            <p>Bring called seed first of third give itself now ment</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="new_product">
                            <h5 className="text-uppercase">collection of 2019</h5>
                            <h3 className="text-uppercase">Men’s summer t-shirt</h3>
                            <div className="product-img">
                                <img className="img-fluid" src={ require("../../../Assets/img/product/new-product/new-product1.png")} alt="" />
                            </div>
                            <h4>$120.70</h4>
                            <Link to="#" className="main_btn">Add to cart</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src={ require("../../../Assets/img/product/new-product/n1.jpg") } alt=""/>
                                        <div className="p_icon">
                                            <Link to="#">
                                                <i className="ti-eye"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-heart"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-shopping-cart"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-btm">
                                        <Link to="#" className="d-block">
                                            <h4>Nike latest sneaker</h4>
                                        </Link>
                                        <div className="mt-3">
                                            <span className="mr-4">$25.00</span>
                                            <del>$35.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src={ require("../../../Assets/img/product/new-product/n2.jpg") } alt=""/>
                                        <div className="p_icon">
                                            <Link to="#">
                                                <i className="ti-eye"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-heart"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-shopping-cart"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-btm">
                                        <Link to="#" className="d-block">
                                            <h4>Men’s denim jeans</h4>
                                        </Link>
                                        <div className="mt-3">
                                            <span className="mr-4">$25.00</span>
                                            <del>$35.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src={ require("../../../Assets/img/product/new-product/n3.jpg" )} alt=""/>
                                        <div className="p_icon">
                                            <Link to="#">
                                                <i className="ti-eye"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-heart"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-shopping-cart"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-btm">
                                        <Link to="#" className="d-block">
                                            <h4>quartz hand watch</h4>
                                        </Link>
                                        <div className="mt-3">
                                            <span className="mr-4">$25.00</span>
                                            <del>$35.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src={ require("../../../Assets/img/product/new-product/n4.jpg")} alt=""/>
                                        <div className="p_icon">
                                            <Link to="#">
                                                <i className="ti-eye"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-heart"/>
                                            </Link>
                                            <Link to="#">
                                                <i className="ti-shopping-cart"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-btm">
                                        <Link to="#" className="d-block">
                                            <h4>adidas sport shoe</h4>
                                        </Link>
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
            </div>
        </section>
    )
}

export default NewProds
