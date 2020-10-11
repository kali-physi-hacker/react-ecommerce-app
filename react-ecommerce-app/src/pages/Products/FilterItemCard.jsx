import React from 'react';


const FilterItemCard = props => {
    const filterItemId = `#${props.id}`
    return (
        <article className="card-group-item">
            <header className="card-header">
                {/* eslint-disable-next-line */}
                <a aria-expanded="true" href="#" data-toggle="collapse" data-target={filterItemId}>
                    <i className="icon-action fa fa-chevron-down"></i>
                    <h6 className="title"> {props.title} </h6>
                </a>
            </header>
            <div className="filter-content collapse show" id={props.id}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </article>
    )
}


export default FilterItemCard;