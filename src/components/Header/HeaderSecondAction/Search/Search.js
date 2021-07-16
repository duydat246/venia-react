import React from 'react';
import './Search.scss';

function Search() {
    return (
        <button className="searchTrigger-root clickable-root" aria-label="Search">
            <span className="icon-root">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon-icon-3jC">
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
            </span>
            <span className="searchTrigger-label">Search</span>
        </button>
    );
}

export default Search;