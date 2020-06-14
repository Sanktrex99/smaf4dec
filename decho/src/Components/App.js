import React, { Component } from 'react';
import LandingPage from 'Pages/Landing/LandingPage';
import TimelinePage from 'Pages/Timeline/TimelinePage';
import { getOneOppFromServer } from 'Utils/getOpp';
import 'Components/App.css';

class App extends Component {
  state = {
    currentPage: 'landing',
    currentLean: 'right', /* the currentLean value will not be capitalized because it is not capitalized in the database*/
    opp: '',
  };

  changePage = (page) => {
    return (currentLean) => {
      // console.log(`currentLean is ${currentLean}`)
      getOneOppFromServer(currentLean).then((opp) => {
        console.log(`opp is ${opp}`)
        this.setState({
          currentPage: page,
          currentLean: currentLean || this.state.currentLean,
          opp,
        });
      });
    };
  };
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage changePage={this.changePage('timeline')} />}
        {currentPage === 'timeline' && (
          <TimelinePage politicalLean={this.state.currentLean} partisan={this.state.opp} />
        )}
      </div>
    );
  }
}

export default App;
