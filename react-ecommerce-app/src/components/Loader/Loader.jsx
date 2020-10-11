import React from 'react';
import './Loader.css';


const Loader = () => {

    const loaderContainerStyle = {
        margin: "auto",
    }

    return (
        <div style={loaderContainerStyle} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default Loader