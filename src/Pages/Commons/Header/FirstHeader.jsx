import React from 'react';

const FirstHeader = () => (
    <div className="top_menu">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="float-left">
                        <p>Phone: +01 256 25 235</p>
                        <p>email: info@eiser.com</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="float-right">
                        <ul className="right_side">
                            <li>
                                <a href="cart.html">
                                    gift card
                                </a>
                            </li>
                            <li>
                                <a href="tracking.html">
                                    track order
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default FirstHeader;
