import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import { getOneOpp } from './partisans/getOpp';
import 'Pages/timeline.css';

const TimelinePage = ({ politicalLean }) => {
  let partisan = getOneOpp('left').twitterHandle;
  console.log(`the partisan is ${partisan}`);
  return (
    <div className="timeline-page-container">
      <div className="page-title">Timeline of {politicalLean} Tweets</div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan,
        }}
        options={{
          height: '800',
          width: '300',
        }}
      />
    </div>
  );
};

// console.log(getOneOpp('left'))
export default TimelinePage;
