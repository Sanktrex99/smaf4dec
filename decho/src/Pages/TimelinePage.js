import React from 'react';
import { Timeline } from 'react-twitter-widgets';
<<<<<<< HEAD
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
=======
// import {getOneOpp} from './partisans/getOpp'

const TimelinePage = ({ politicalLean, partisan }) => {

  console.log(`the partisan is ${partisan.twitterHandle}`)
  // console.log(partisan)
  return (
    <div>
      <div className="page-title">Timeline of {politicalLean === 'right' ? 'left' : 'right'} Tweets</div>
      <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: partisan.twitterHandle
          }}
          options={{
            height: '800'
          }}
        />
>>>>>>> master
    </div>
  );
};

// console.log(getOneOpp('left'))
export default TimelinePage;
