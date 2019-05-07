import React, {Component} from 'react';

class RightMenu extends Component {
    render(){
        return(
            <div className="col-lg-5 pr-0">
                <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                        <a href="#" className="icons">
                            <i className="ti-search" aria-hidden="true"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="icons">
                            <i className="ti-shopping-cart"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="icons">
                            <i className="ti-user" aria-hidden="true"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="icons">
                            <i className="ti-heart" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default RightMenu;
