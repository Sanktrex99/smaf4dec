import React, { Component } from 'react';
import 'App.css';
import LandingPage from 'Pages/LandingPage';
import TimelinePage from 'Pages/TimelinePage';
import DeEchoDashboard from 'Pages/DeEchoDashboard/DeEchoDashboard.pages';

class App extends Component {
  state = {
    currentPage: 'dashboard',
  };
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'timeline' && <TimelinePage />}
        {currentPage === 'dashboard' && <DeEchoDashboard />}
      </div>
    );
  }
}

export default App;
