import React from 'react';
import { Link } from 'react-router-dom';


const PageTop = () => {
    return (
        <section className="section-pagetop bg-secondary">
            <div className="container clearfix">
                <h2 className="title-page">Product Listings</h2>

                <nav className="float-left">
                <ol className="breadcrumb bg-white px-3 py-1">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Products</li>
                    {/* <li className="breadcrumb-item active" aria-current="page">{props}</li> */}
                </ol>  
                </nav>
            </div>
        </section>
    )
}


export default PageTop;