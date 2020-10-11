import React from 'react';

import FilterItemCard from './FilterItemCard';


const FeatureFilter = () => {
    return (
        <FilterItemCard
            title={"By Feature"}
            id={"collapse44"}>
            
            <form>
                <label className="form-check">
                    <input className="form-check-input" value="" type="checkbox" />
                    <span className="form-check-label">
                        <span className="float-right badge badge-light round">5</span>
                        Samsung
                    </span>
                </label> 
                <label className="form-check">
                    <input className="form-check-input" value="" type="checkbox" />
                    <span className="form-check-label">
                        <span className="float-right badge badge-light round">13</span>
                        Mersedes Benz
                    </span>
                </label>
                <label className="form-check">
                    <input className="form-check-input" value="" type="checkbox" />
                    <span className="form-check-label">
                        <span className="float-right badge badge-light round">12</span>
                        Nissan Altima
                    </span>
                </label> 
                <label className="form-check">
                    <input className="form-check-input" value="" type="checkbox" />
                    <span className="form-check-label">
                        <span className="float-right badge badge-light round">32</span>
                        Another Brand
                    </span>
                </label> 
            </form>

        </FilterItemCard>
    )
}


export default FeatureFilter;