import React from 'react'
import {Link} from 'react-router-dom';

function FeatureProd() {
    return (
        <section className="feature_product_area section_gap_bottom_custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <h2><span>Featured product</span></h2>
                            <p>Bring called seed first of third give itself now ment</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product">
                            <div className="product-img">
                                <Link to='/products_list' >
                                    <img className="img-fluid w-100" src={require("../../../Assets/img/product/feature-product/f-p-1.jpg")} alt={'Product'}/>
                                </Link>
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
                                    <h4>Latest men’s sneaker</h4>
                                </Link>
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
                                <Link to='/products_list' >
                                    <img className="img-fluid w-100" src= { require("../../../Assets/img/product/feature-product/f-p-2.jpg")} alt=""/>
                                </Link>
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
                                    <h4>Red women purses</h4>
                                </Link>
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
                                <Link to='/products_list' >
                                    <img className="img-fluid w-100" src={ require("../../../Assets/img/product/feature-product/f-p-3.jpg")} alt=""/>
                                </Link>
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
                                    <h4>Men stylist Smart Watch</h4>
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
        </section>
    )
}

export default FeatureProd
