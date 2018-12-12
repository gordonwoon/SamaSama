import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { Page7 } from './pages/Page7';
import { Page8 } from './pages/Page8';
import { Page9 } from './pages/Page9';
import './App.css';
import 'animate.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Page1} />
            <Route path="/page2" exact component={Page2} />
            <Route path="/page3" exact component={Page3} />
            <Route path="/page4" exact component={Page4} />
            <Route path="/page5" exact component={Page5} />
            <Route path="/page6" exact component={Page6} />
            <Route path="/page7" exact component={Page7} />
            <Route path="/page8" exact component={Page8} />
            <Route path="/page9" exact component={Page9} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
