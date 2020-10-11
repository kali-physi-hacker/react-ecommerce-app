import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {mainAppContext} from "../../../reducers/mainReducer";


const Topbar = () => {

    const main_app_state = useContext(mainAppContext);

    console.log(main_app_state)

    return (
        <div id="navbar-top-main" className="navbar-top  navbar-dark bg-dark border-bottom">
            <div className="container px-0">
                <div className="navbar-nav align-items-center">
                    <div className="d-none d-lg-inline-block">
                        <span className="navbar-text mr-3">Kalicommerce - Shop secure and fast</span>
                    </div>
                    <div className={"ml-auto"}>
                        <ul className="nav">
                            <li className="nav-item dropdown ml-lg-2">
                                <a className="nav-link px-0" href="#" role="button" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false" data-offset="0,10">
                                    <img alt="Image placeholder"
                                         src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/icons/flags/gh.svg" />
                                        <span className="d-none d-lg-inline-block">United States</span>
                                        <span className="d-lg-none">EN</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-sm">
                                    <a href="#" className="dropdown-item"><img alt="Image placeholder"
                                                                               src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/icons/flags/es.svg" />Spanish</a>
                                    <a href="#" className="dropdown-item"><img alt="Image placeholder"
                                                                               src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/icons/flags/ro.svg" />Romanian</a>
                                    <a href="#" className="dropdown-item"><img alt="Image placeholder"
                                                                               src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/icons/flags/gr.svg" />Greek</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link">Support</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-action="omnisearch-open"
                                   data-target="#omnisearch"><i className="far fa-search"></i></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"><i
                                    className="far fa-shopping-cart"></i></Link>
                            </li>
                            {
                                main_app_state.authState.currentUser === null ? (
                                    <li className={"nav-item"}>
                                        <Link className={"nav-link pr-0"} to={'/login'}>
                                            <i className="far fa-user-circle"></i>
                                        </Link>
                                    </li>
                                ) : (
                                <li className="nav-item dropdown">
                                    <Link className="nav-link pr-0" href="#" data-toggle="dropdown" aria-haspopup="true"
                                          aria-expanded="false">
                                        <i className="far fa-user-circle"></i>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                        <h6 className="dropdown-header">{main_app_state.authState.firstName} {main_app_state.authState.lastName}</h6>
                                        <a className="dropdown-item" href="#">
                                            <i className="far fa-user"></i>Account
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="float-right badge badge-primary">4</span>
                                            <i className="far fa-envelope"></i>Messages
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="far fa-cog"></i>Settings
                                        </a>
                                        <div className="dropdown-divider" role="presentation"></div>
                                        <a className="dropdown-item" href="#">
                                            <i className="far fa-sign-out-alt"></i>Sign out
                                        </a>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Topbar;