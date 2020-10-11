import React from 'react';

import FilterItemCard from './FilterItemCard';


const PriceFilter = () => {
    return (
        <FilterItemCard
            title={"By Price"}
            id={"collapse33"}>
            
            <input type="range" className="custom-range" min="0" max="100" name="" />
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Min</label>
                    <input onChange={(e) => console.log(e.target.value)} className="form-control" placeholder="$0" type="number" />
                </div>
                <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input className="form-control" placeholder="$1,0000" type="number" />
                </div>
            </div>
            <button className="btn btn-block btn-outline-primary">Apply</button>

        </FilterItemCard>
    )
}


export default PriceFilter;