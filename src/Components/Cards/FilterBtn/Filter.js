import { useEffect } from "react"
import "./Filter.css"
import React from 'react';

const Filter = (props) => {

    function onFilterselectd(event) {
        // passing the data to the blogpages
        props.filterValueSelected(event.target.value)
    }

    return (
        <div>
            <div className="box">
                <select name="isAvailable" onChange={onFilterselectd}>
                    <option value="all">All</option>
                    <option value="mostpopular">Most Popular</option>
                    <option value="lesscommon">Less Common</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;

