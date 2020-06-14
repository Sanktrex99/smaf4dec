import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Pages/Timeline/TimelinePage.styles.css';
// import './TimelinePage.styles.css';
// import {getOneOpp} from './partisans/getOpp'

const TimelinePage = ({ politicalLean, partisan }) => {
  console.log(`the partisan is ${partisan.twitterHandle}`);
  // console.log(partisan)
  return (
    <div className="proto-container">
      <div className="page-title">De-Echo Feed of {politicalLean === 'right' ? 'Left' : 'Right'}-Leaning Tweets</div> {/* the politicalLean value will not be capitalized because it is not capitalized in the database*/}
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan.twitterHandle,
        }}
        options={{
          height: '800',
        }}
      />
    </div>
  );
};

// console.log(getOneOpp('left'))
export default TimelinePage;
