import React, {Component} from 'react'
import FirstHeader from './Header/FirstHeader'
import SecondHeader from "./Header/SecondHeader";

class Header extends Component {
    render() {
        return (
            <header className="header_area">
                <FirstHeader/>
                <SecondHeader/>
            </header>
        )
    }
}

export default Header
