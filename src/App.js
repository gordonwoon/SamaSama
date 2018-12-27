import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { Page7 } from './pages/Page7';
import { Page8 } from './pages/Page8';
import { Page8A } from './pages/Page8A';
import { Page8B } from './pages/Page8B';
import { Page8C } from './pages/Page8C';
import 'animate.css';
import './styles/App.css';
import './styles/Component.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Page1} />
          <Route path="/page2" exact component={Page2} />
          <Route path="/page3" exact component={Page3} />
          <Route path="/page4" exact component={Page4} />
          <Route path="/page5" exact component={Page5} />
          <Route path="/page6" exact component={Page6} />
          <Route path="/page7" exact component={Page7} />
          <Route path="/page8" exact component={Page8} />
          <Route path="/page8A" exact component={Page8A} />
          <Route path="/page8B" exact component={Page8B} />
          <Route path="/page8C" exact component={Page8C} />
        </div>
      </Router>
    );
  }
}

export default App;
