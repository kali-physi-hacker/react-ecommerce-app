import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from '../../components/UserDropdown';

// Import Some Helper Functions
import { isEmpty } from '../../utils';
import { accountContext } from "../../reducers/accountReducer";


const Header = props => {

    const account_context = useContext(accountContext);

    return (
        <header className="section-header">
            <nav className="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand mr-auto" to="/"> 
                    KaliCommerce React App
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link page-scroll" href="#intro">Intro</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#content">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#more">Update</a>
                        </li>
                        { 
                        isEmpty(account_context.accounts.currentUser) ?
                            (
                                <UserDropDown logout={props.logout} setUser={props.setUser} user={props.user} />
                            ) : 
                            ( 
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link bg-info rounded btn btn-sm text-light" href="#login"> 
                                        Login 
                                    </Link>
                                </li> 
                            )                                                               
                        }
                    </ul>
                </div>
            </div>
            </nav>
        </header>

        )   
    }


export default Header;