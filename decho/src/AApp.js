import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import UserProvider from 'Context/UserProvider.context';
import 'App.css';
import LandingPage from 'Pages/Landing/LandingPage';
import TimelinePage from 'Pages/Timeline/TimelinePage';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// import './App.css';
// import LandingPage from '../Pages/Landing//LandingPage';
// import TimelinePage from '../Pages/Timeline/TimelinePage';
// import { getOneOppFromServer } from '../Pages/partisans/getOpp';

const App = () => {
  return (
    <Router history={history}>
      <UserProvider>
        <Route exact path="/" component={LandingPage} />
        <Route path="/timeline" component={TimelinePage} />
      </UserProvider>
    </Router>
  );
};

export default App;
