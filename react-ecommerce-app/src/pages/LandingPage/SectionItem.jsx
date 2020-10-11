import React from 'react';


const SectionItem = props => {

    const sectionIconClass = `${props.iconClass}`
    const iconBackgroundClass = "mt-2 icon-wrap rounded icon-sm " + props.iconBackground
    return (
        <div className="col-md-3 mb15">
            <article className="box h-100">
                <figure className="itembox text-center">
                    <span className={iconBackgroundClass}><i className={sectionIconClass}></i></span>
                    <figcaption className="text-wrap">
                    <h5 className="title">{props.title}</h5>
                    <p className="text-muted">
                        {props.description}
                    </p>
                    </figcaption>
                </figure>
            </article>
        </div>
    )
}


export default SectionItem;