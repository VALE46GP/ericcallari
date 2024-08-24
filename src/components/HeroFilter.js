import './HeroFilter.sass';
import React from 'react';

function HeroFilter({ filters, activeFilter, onFilterSelect }) {
    return (
        <div className='hero-filter'>
            <img
                alt='sunrise from mountain top'
                className='hero-filter__image'
                src='https://ericcallari.s3.us-west-1.amazonaws.com/hero-filter-1.jpg'
            />
            <div className='hero-filter__filter-wrapper'>
                <div className='hero-filter__filter'>
                    {filters.map((filter, index) => (
                        <button
                            className={`hero-filter__button ${activeFilter === filter ? 'hero-filter__button--active' : ''}`}
                            key={index}
                            onClick={() => onFilterSelect(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroFilter;
