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
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products_list">Shop Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="single-product.html">Product
                                    Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="checkout.html">Product
                                    Checkout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="cart.html">Shopping Cart</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="blog.html">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="single-blog.html">Blog Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="tracking.html">Tracking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="elements.html">Elements</Link>
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
