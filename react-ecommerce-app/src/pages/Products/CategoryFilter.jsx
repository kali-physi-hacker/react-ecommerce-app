import React, { useContext } from 'react';

// Import Some Helper Functions
import { getProductsByCategory } from '../../utils';

import FilterItemCard from './FilterItemCard';
import {storeContext} from "../../reducers/storeReducer";


const CategoryFilter = props => {

    const store_context = useContext(storeContext);

    const showCategoryProducts = (e) => {
        const products = getProductsByCategory(store_context.store.products, e.target.name);
        store_context.dispatchStore({type: "MATCH_PRODUCTS_CATEGORIES", matchProducts: products});
    }

    return (
        <FilterItemCard 
            title={"By Category"}
            id={"collapse22"}>
            <form className="pb-3">
                <div className="input-group">
                <input className="form-control" placeholder="Search" type="text" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button"><i className="fa fa-search"></i></button>
                </div>
                </div>
            </form>

            <ul className="list-unstyled list-lg">
                {store_context.store.categories.length > 0 ?
                    store_context.store.categories.map(category=> (
                    <li key={store_context.store.categories.indexOf(category)}>
                        <a name={category.name.name} onClick={showCategoryProducts} href="#1">
                            {category.name.name}
                            <span className="float-right badge badge-light round">
                                {category.name.count}
                            </span>
                        </a>
                    </li>
                    )) :
                    <p></p>
                }
            </ul>  

        </FilterItemCard>
    )
}

export default CategoryFilter;