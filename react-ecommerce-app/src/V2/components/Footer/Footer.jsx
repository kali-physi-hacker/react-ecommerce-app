import React from 'react';
import logo from '../../../assets/img/brand/logo.jfif';


const Footer = () => {
    return (
        <footer id="footer-main">
            <div className="footer footer-dark bg-dark">
                <div className="container">
                    <div className="row pt-md">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <a style={{fontFamily: "Panton", color: "white"}} href="https://preview.webpixels.io/purpose-website-ui-kit/index.html">
                                {/*<img src={logo} alt="Footer logo" style={{height: 70}} />*/}
                                Kalicommerce
                            </a>
                            <p>Purpose is a unique and beautiful collection of UI elements that are all flexible and
                                modular. A complete and customizable solution to building the website of your
                                dreams.</p>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Account</h6>
                            <ul className="list-unstyled">
                                <li><a
                                    href="https://preview.webpixels.io/purpose-website-ui-kit/pages/account-profile.html">Profile</a>
                                </li>
                                <li><a
                                    href="https://preview.webpixels.io/purpose-website-ui-kit/pages/account-settings.html">Settings</a>
                                </li>
                                <li><a
                                    href="https://preview.webpixels.io/purpose-website-ui-kit/pages/account-billing.html">Billing</a>
                                </li>
                                <li><a
                                    href="https://preview.webpixels.io/purpose-website-ui-kit/pages/account-notifications.html">Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                            <h6 className="heading mb-3">About</h6>
                            <ul className="list-unstyled text-small">
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                            <h6 className="heading mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                        <div className="col-md-6">
                            <div className="copyright text-sm font-weight-bold text-center text-md-left">
                                &copy; 2018-2019 <a href="../../../../webpixels.io/index.html"
                                                    className="font-weight-bold" target="_blank">Webpixels</a>. All
                                rights reserved.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="../../../../dribbble.com/webpixels.html"
                                       target="_blank">
                                        <i className="fab fa-dribbble"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="../../../../www.instagram.com/webpixelsofficial/index.html"
                                       target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../../../../github.com/webpixels.html"
                                       target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../../../../web.facebook.com/webpixelsc9ef.html"
                                       target="_blank">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;