import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Literature from './Components/Literature'
import About from './Components/About'


export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // lodingImge = false
  //   }

  // }
  // handelImge() {

  // }



  render() {
    return (
      <div>
        <div>
          <header>
            William Shakespeare
            </header>
        </div>

        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>  {'  ||  '}
              <Link to="/Literature">Literature</Link>
              {'  ||  '}
              <Link to="/About">About</Link>
            </nav>
            <Route exact path="/App" component={App} />
            <Route path="/Literature/" component={Literature} />
            <Route path="/About" component={About} />
          </div>
        </Router>
      </div>
    )
  }
}