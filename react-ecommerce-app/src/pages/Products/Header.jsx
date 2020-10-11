import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from '../../components/UserDropdown';
import CartIcon from '../../components/CartIcon';
import Search from '../../components/Search/Search';

// Some Helper Functions 
import { isEmpty } from '../../utils';
import { accountContext } from '../../reducers/accountReducer';
import {storeContext} from "../../reducers/storeReducer";


const Header = props => {

    const account_context = useContext(accountContext);
    const store_context = useContext(storeContext)

    return (
        <header className="section-header">
            <nav className="navbar navbar-top navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3" id="navbarNav">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item"><Link to="/products" className="nav-link" href="#">Products</Link></li>
                            {
                                isEmpty(account_context.accounts.currentUser) ?
                                (
                                    <div className="ml-auto">
                                        <CartIcon cartLength={store_context.store.cart.length} />
                                        <UserDropDown />
                                    </div>
                                ) : 
                                ( 
                                    <div className="ml-auto pb-4">
                                        <li className="nav-item"><Link className="nav-link bg-info rounded btn btn-sm text-light" to="/login"> Login <i className="fas fa-user"></i></Link></li>
                                    </div>
                                )                                                               
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="header-main shadow">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-4">
                        <div className="brand-wrap">
                            <h2 className="logo-text">KaliCommerce React App</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-8">
                       <Search />
                    </div>
                    <div className="col-lg-3 col-sm-12">
                            <a href="#phone" className="widget-header float-md-right">
                                <div className="icontext">
                                    <div className="icon-wrap"><i className="flip-h fa-lg fa fa-phone"></i></div>
                                    <div className="text-wrap">
                                        <small>Phone</small>
                                        <div>+233 50 241 8612</div>
                                    </div>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    </header>
    )   
}


export default Header;