import React from 'react';
import Topbar from "./Topbar";
import Navbar from "./Navbar";


const Header = props => {
    return (
        <header className={"header header-transparent"} id={"header-main"}>
            { props.topbar ? <Topbar /> : null }
            <Navbar colorVariant={props.colorVariant} />
        </header>
    )
}


export default Header;