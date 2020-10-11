import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = props => {
    return (
        <nav className={`navbar navbar-main navbar-expand-lg navbar-transparent navbar-${props.colorVariant} bg-${props.colorVariant}`} id="navbar-main">
            <div className="container px-lg-0">
                <Link style={{fontFamily: "Panton"}} className="navbar-brand mr-lg-5" to={'/'}>
                    Kalicommerce
                </Link>
                <button className="navbar-toggler pr-0" type="button" data-toggle="collapse"
                        data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-main-collapse">
                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item ">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Offers</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                        <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                            <Link to={'#'} className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item d-lg-none d-xl-block">
                            <Link to={'#'} className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item mr-0">
                            <a href="../../../../themes.getbootstrap.com/product/purpose-website-ui-kit/index.html"
                               target="_blank" className="nav-link d-lg-none">Purchase now</a>
                            <Link to={'/products'}
                               target="_blank"
                               className={`btn btn-sm btn-${props.colorVariant == 'dark' ? 'white' : 'dark'} btn-icon rounded-pill d-none d-lg-inline-flex`}
                               data-toggle="tooltip" data-placement="left" title="Go to Bootstrap Themes">
                                <span className="btn-inner--icon"><i className="far fa-shopping-cart"></i></span>
                                <span className="btn-inner--text">Shop now</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;