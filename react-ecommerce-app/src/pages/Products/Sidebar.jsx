import React from 'react';

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import FeatureFilter from './FeatureFilter';


const Sidebar = props => {
    return (
        <div className="card card-filter">
            <CategoryFilter setMatchProducts={props.setMatchProducts} setProducts={props.setProducts} />
            <PriceFilter />
            <FeatureFilter />
        </div>
    )
}


export default Sidebar;