import React from "react";

import '../static/css/toast.css';


const Toast = props => {

    return (
        // <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
            <div className="toast show bg-light" style={{position: "absolute", top: 0, right:"8%", zIndex: 100, minWidth: "300px", minHeight: "50px"}}>
                <div className="toast-header">
                    <strong className="mr-auto">{props.title}</strong>
                    <small className="text-muted">just now</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body text-align-center">
                    <p style={{textAlign: "center", fontSize: "1.3rem"}}>
                        {props.message} 
                        <i className={props.type === "cart" ? 'fas fa-shopping-cart ml-2 text-info' : null}></i>
                        <i className={props.type === "wishlist" ? 'fa fa-heart ml-2 text-danger' : null}></i>
                    </p>
                </div>
            </div>
        // </div>
    )
}

export default Toast;