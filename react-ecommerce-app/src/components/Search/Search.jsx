import React, {useContext, useState} from 'react';
import {storeContext} from "../../reducers/storeReducer";


const Search = props => {
    const [searchQuery , setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const store_context = useContext(storeContext);

    return (
        <form action="#" className="search-wrap">
            <div className="input-group w-100">
                <input defaultValue={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} type="text" className="form-control" style={{width:'55%'}} placeholder="Search" />
                <select className="custom-select"  name="category_name">
                        <option value="">All type</option><option value="codex">Special</option>
                        <option value="comments">Only best</option>
                        <option value="content">Latest</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                {
                    showSearch ? 
                        <div className="bg-light shadow-lg w-100" style={{position: "absolute", top: 40, zIndex: "5"}}>
                            <ul className="pb-2" style={{listStyle: "none"}}>
                                {props.searchResults}
                                <li className="pt-2 border-bottom">{searchQuery}</li>
                            </ul>
                        </div>
                    :
                    null
                }
            </div>
            
        </form>
    )
}


export default Search;