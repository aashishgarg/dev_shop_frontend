import React from 'react';
import {Link} from 'react-router-dom';

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
                                <Link to={'/tracking'} >track order</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default FirstHeader;
