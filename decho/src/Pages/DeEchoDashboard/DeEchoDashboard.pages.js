import React, { Component } from 'react';
import 'Pages/DeEchoDashboard/DeEchoDashboard.styles.css';
import UserProfile from 'Components/UserProfile/UserProfile.component';
import UserPatterns from 'Components/UserPatterns/UserPatterns.component';
import TimelineFilters from 'Components/TimelineFilters/TimelineFilters.component';

class DeEchoDashboard extends Component {
  render() {
    return (
      <div>
        <div className="title">Dashboardfor App de-Echo</div>
        <UserProfile />
        <UserPatterns />
        <TimelineFilters />
      </div>
    );
  }
}
export default DeEchoDashboard;
