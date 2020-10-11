import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { accountContext } from "../reducers/accountReducer";


const UserDropDown = (props) => {

    const account_context = useContext(accountContext);


    return (
        <li className="icontext nav-item text-info">
            <div className="icon-wrap"><i className="round text-info fa fa-user fa-2x"></i></div>
            <div className="text-wrap dropdown">
                <small className="text-light">Welcome {account_context.accounts.currentUser.firstName}</small>
                <a href="#my-account" className="b text-info" data-toggle="dropdown" data-offset="20,10" aria-expanded="false"> 
                    My account <i className="fa fa-caret-down"></i> 
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#profile">Profile</a>
                    <Link to="/cart/wishlist" href="#wishlist" className="dropdown-item">Wishlist</Link>
                    <a className="dropdown-item" href="#logout" onClick={()=> account_context.dispatchAccount({type: "logout"})}>Logout </a>
                </div> 
            </div> 
        </li> 
    )
}


export default UserDropDown;