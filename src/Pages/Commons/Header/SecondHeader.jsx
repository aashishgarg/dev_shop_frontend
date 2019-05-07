import React, { Component } from 'react';
import Menu from './Menu';
import RightMenu from "./RightMenu";
import {Link} from 'react-router-dom';

class SecondHeader extends Component {
    render(){
        return(
            <div className="main_menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <Link className="navbar-brand logo_h" href="index.html">
                            <img src={require("../../../Assets/img/logo.png")} alt='Logo' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                            <div className="row w-100 mr-0">
                                <Menu/>
                                <RightMenu/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default SecondHeader;
