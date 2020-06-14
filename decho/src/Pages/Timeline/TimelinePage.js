import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Pages/Timeline/TimelinePage.styles.css';
// import './TimelinePage.styles.css';
// import {getOneOpp} from './partisans/getOpp'

const TimelinePage = ({ politicalLean, partisan }) => {
  console.log(`the partisan is ${partisan.twitterHandle}`);
  // console.log(partisan)
  return (
    <div class="proto-container">
      <div className="page-title" style={{ padding: '10px' }}>
        De-Echo Feed of {politicalLean === 'right' ? 'Left' : 'Right'}-Leaning Tweets
      </div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan.twitterHandle,
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
