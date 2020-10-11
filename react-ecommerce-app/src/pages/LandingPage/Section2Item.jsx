import React from 'react';


const Section2Item = props => {
    const iconClass = "fa-lg fa fa-envelope " + props.icon
    return (
        <div className="col-md-4">
			<figure className="itemside">
				<div className="aside">
					<span className="icon-wrap text-primary"><i className={iconClass}></i> </span>
				</div>
				<figcaption className="text-wrap">
					<h5 className="title"> {props.title} </h5>
					<p className="text-muted">
                       {props.description}
                    </p>
				</figcaption>
			</figure>
        </div>
    )
}


export default Section2Item;