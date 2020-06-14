import React, { Component } from './node_modules/react';
import 'Components/UserProfile/UserProfile.styles.css';

const UserProfile = ({ username, hashtags }) => {
  return (
    <div className="UserProfile-container">
      <div className="title">{username}</div>
      <p>{`Based on your profile, you use theses hashtags ${hashtags}most often`}</p>
    </div>
  );
};

export default UserProfile;
