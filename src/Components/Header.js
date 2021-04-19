import React from "react";
import { Link } from 'react-router-dom';

import '../scss/header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="header-sect">
                <h1>Domenic Beall</h1>
                </div>
                <div className="header-sect">
                    <div className="header-link"><Link to="/">Home</Link></div>
                    <div className="header-link"><Link to="/portfolio">Portfolio</Link></div>
                    <div className="header-link"><Link to="/contact">Contact</Link></div>
                </div>
            </header>
        )
    }

}