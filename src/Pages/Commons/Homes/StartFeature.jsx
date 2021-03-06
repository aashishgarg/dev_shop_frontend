import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class StartFeature extends Component {
    render() {
        return (
            <section className="feature-area section_gap_bottom_custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature">
                                <Link to='#' className="title">
                                    <i className="flaticon-money"/>
                                    <h3>Money back gurantee</h3>
                                </Link>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature">
                                <Link to='#' className="title">
                                    <i className="flaticon-truck"/>
                                    <h3>Free Delivery</h3>
                                </Link>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature">
                                <Link to='#' className="title">
                                    <i className="flaticon-support"/>
                                    <h3>Alway support</h3>
                                </Link>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-feature">
                                <Link to='#' className="title">
                                    <i className="flaticon-blockchain"/>
                                    <h3>Secure payment</h3>
                                </Link>
                                <p>Shall open divide a one</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default StartFeature
