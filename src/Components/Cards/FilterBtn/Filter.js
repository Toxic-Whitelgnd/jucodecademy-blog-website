import { useEffect } from "react"
import "./Filter.css"
import React from 'react';
import {BsFillEyeFill} from 'react-icons/bs'

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
                    <option value="sortbyinc">SortBy Inc</option>
                    <option value="sortbydec">SortBy Dec</option>
                    <option value="mostpopular">Most Popular</option>
                    <option value="lesscommon">Less Common</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                    <option value="Food">Food</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Travel">Travel</option>
                    <option value="Music">Music</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;

