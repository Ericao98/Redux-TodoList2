import { visibilityFilter } from '../actions/constantFilter';
import React from 'react';

const Link = ({ stateFilter, filter, onFilterClick, children }) => {
    if (stateFilter === filter) {
        return (
            <span>
                {children}
            </span>
        );
    } else {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFilterClick(filter);
                }}
            >
                {children}
            </button>
        );
    }
};

const Footer = ({ disable, filter, onFilterClick, onClearClick }) => {
    return (
        <p>
            <Link
                stateFilter={filter}
                filter={visibilityFilter.SHOW_ALL}
                onFilterClick={onFilterClick}
            >
                All
            </Link>
            {", "}
            <Link
                stateFilter={filter}
                filter={visibilityFilter.SHOW_ACTIVE}
                onFilterClick={onFilterClick}
            >
                Active
            </Link>
            {", "}
            <Link
                stateFilter={filter}
                filter={visibilityFilter.SHOW_COMPLETED}
                onFilterClick={onFilterClick}
            >
                Completed
            </Link>
            {" "}
            <button
                disabled={disable}
                onClick={onClearClick}
            >
                Clear Completed
            </button>
        </p>
    );
};

export default Footer;
