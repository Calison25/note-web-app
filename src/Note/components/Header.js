import React from "react";


const Header = () => {
    return (
        <nav className="nav nav-wrapper navbar-fixed-top">
            <div className='container-fluid'>
                <ul className="left hide-on-med-and-down">
                    <li><a className='a-nav-bar' href='#'><i className='material-icons left'>menu</i></a></li>
                    <li className='a-nav-bar'><h5>Google Keep</h5></li>
                </ul>

                <ul className="right hide-on-med-and-down">
                    <li><a className='a-nav-bar' href='#'><i className='material-icons left'>search</i></a></li>
                    <li><a className='a-nav-bar' href='#'><i className='material-icons left'>refresh</i></a></li>
                    <li><a className='a-nav-bar' href='#'><i className='material-icons left'>settings</i></a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Header