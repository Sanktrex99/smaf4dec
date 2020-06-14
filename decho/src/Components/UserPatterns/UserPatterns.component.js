import React from 'react';
import 'Components/UserPatterns/UserPatterns.styles.css';

const componentVariables = {
  pattern: 'Left',
  hashtags: ['#GreenNewDeal', '#BlackLivesMatter', '#DontBooVote'],
};
const UserPatterns = () => {
  const { pattern, hashtags } = componentVariables;
  console.log(hashtags);
  return (
    <div className="UserPatterns-container">
      <div className="title">{pattern}</div>
      <p>{`Based on your profile, you use theses hashtags ${hashtags.map((hash) => `${hash} `)} most often`}</p>
    </div>
  );
};

export default UserPatterns;
