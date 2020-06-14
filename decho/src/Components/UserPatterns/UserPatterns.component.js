import React, { Component } from './node_modules/react';
import 'Components/UserPatterns/UserPatterns.styles.css';

const UserPatterns = ({ pattern }) => {
  return (
    <div className="UserPatterns-container">
      <div className="title">{pattern}</div>
      <p>{`Based on your profile, you use theses hashtags ${hashtags}most often`}</p>
    </div>
  );
};

export default UserPatterns;
