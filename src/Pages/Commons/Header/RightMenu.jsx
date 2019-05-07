import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class RightMenu extends Component {
    render(){
        return(
            <div className="col-lg-5 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                        <Link to="#" className="icons">
                            <i className="ti-search" aria-hidden="true"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="icons">
                            <i className="ti-shopping-cart"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="icons">
                            <i className="ti-user" aria-hidden="true"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="icons">
                            <i className="ti-heart" aria-hidden="true"/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default RightMenu;
