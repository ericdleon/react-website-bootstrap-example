import React, { Component } from 'react';
import Navbar from './components/CustomNavbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/resume" component={ Resume } />
          <Route component={ Error } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
