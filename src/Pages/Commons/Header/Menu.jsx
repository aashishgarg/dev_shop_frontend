import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div className="col-lg-7 pr-0">
                <ul className="nav navbar-nav center_nav pull-right">
                    <li className="nav-item active">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item submenu dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">Shop Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="single-product.html">Product
                                    Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="checkout.html">Product
                                    Checkout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="cart.html">Shopping Cart</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="single-blog.html">Blog Details</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="tracking.html">Tracking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="elements.html">Elements</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to={'/contact'} className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;
