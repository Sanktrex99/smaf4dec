import React from 'react';
import 'Components/TimelineFilters/TimelineFilters.styles.css';

const filters = ['Topics', 'HashTags', 'Feed'];

const TimelineFilters = () => {
  return (
    <div className="TimelineFilters-container">
      <div>
        {filters.map((filter, i) => (
          <div key={i}>{filter}</div>
        ))}
      </div>
    </div>
  );
};

export default TimelineFilters;
