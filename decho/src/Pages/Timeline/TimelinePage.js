import React, { useContext } from 'react';
import { Timeline } from 'react-twitter-widgets';
import UserProvider from 'Context/UserProvider.context.js';

const TimelinePage = ({ politicalLean = 'right', twitterHandle = '@BarackObama' }) => {
  // console.log(`the partisan is ${partisan.twitterHandle}`);
  // console.log(partisan)
  const userData = useContext(UserProvider.context);
  console.log(userData, 'this is user datea');
  return (
    <UserProvider>
      <div className="page-title">Timeline of {politicalLean === 'right' ? 'left' : 'right'} Tweets</div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: twitterHandle,
        }}
        options={{
          height: '800',
          width: 300,
        }}
      />
    </UserProvider>
  );
};

export default TimelinePage;
