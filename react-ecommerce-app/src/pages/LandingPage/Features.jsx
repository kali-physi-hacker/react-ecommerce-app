import React from 'react';

// Font awesome Icons


const Features = () => {
    return (
        <section id="features" className="section-features bg2 padding-y-lg">
            <div className="container">

            <header className="section-heading text-center">
            <h2 className="title-section">How it works </h2>
            <p className="lead"> Go through the fastest and easiest way to buy online </p>
            </header>

            <div className="row">
                <aside className="col-sm-4">
                    <figure className="itembox text-center">
                        <span className="icon-wrap icon-lg bg-secondary white">
                            <i className="fa fa-search"></i>
                            {/* <i classNameName="material-icons p-0">search</i> */}
                        </span>
                        <figcaption className="text-wrap">
                            <h4 className="title">Find your purchase</h4>	
                            <p>
                                Your first step will be to find your product. Our Intelligent Cognitive system will
                                suggest to you relevant products that suite your needs.
                            </p>
                        </figcaption>
                    </figure>
                </aside>
                <aside className="col-sm-4">
                    <figure className="itembox text-center">
                        <span className="icon-wrap icon-lg bg-secondary  white"><i className="fa fa-gift"></i></span>
                        <figcaption className="text-wrap">
                            <h4 className="title">Place an order</h4>
                            <p>
                                Just after you find the best products that suites your needs, your place a simple order
                                by first adding your item to your cart and checking out.
                            </p>
                        </figcaption>
                    </figure>
                </aside>
                <aside className="col-sm-4">
                    <figure className="itembox text-center">
                        <span className="icon-wrap icon-lg bg-secondary  white"><i className="fa fa-shipping-fast"></i>	</span>
                        <figcaption className="text-wrap">
                        <h4 className="title">Order is shipped</h4>
                        <p>
                            The final step is to get a cup of coffee and sit back waiting for your item. Your product will
                            be shipped to your as soon as as possible. 
                        </p>
                        </figcaption>
                    </figure>
                </aside>
            </div>

            <p className="text-center">
                <br />
                <a href="#action" className="btn btn-warning">Learn more</a>
            </p>

            </div>
        </section>
    )
}


export default Features;