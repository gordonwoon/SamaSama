import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { mountPageTween, unmountPageTween } from './helper/tween';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
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
        </div>
      </Router>
    );
  }
}

export default App;
