import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'

import AddNewLiterature from './Components/AddNewLiteraure'
import LinesOfAuthor from './Components/LinesOfAuthor'
import Literature from './Components/Literature'
import About from './Components/About'
import Favorites from './Components/Favorites'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: [],
      faves: [],

    }
  }
  handleFaveToggle = (title) => {
    let faves = this.state.faves.slice()
    let titleIndex = faves.indexOf(title)

    if (titleIndex !== -1) {
      faves.splice(titleIndex, 1);

      console.log(`Removing From Favors`)
    }
    else {

      faves.push(title);

      console.log(`Adding To Favors`)
    }

    this.setState({
      faves
    })

  }


  addNewItem = (newTitleTerm) => {


    this.setState({
      // author: [...this.state.author, { author: "William Shakespeare", title: newTitleTerm }],
      author: [...this.state.author, { title: newTitleTerm }],

    });
  }



  componentDidMount() {

    axios({
      method: 'get',
      url: 'http://poetrydb.org/author/William%20Shakespeare'
    })
      .then(succ => {

        console.log(succ, "succ")
        console.log(succ.data, "succ.data")

        this.setState({
          author: succ.data
        })
        console.log(this.state.author, "author")
      })
      .catch(error => {
        console.log(error, "error")
      })

  }



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
              <Link to='/LinesOfAuthor'>LinesOfAuthor</Link>
              {'  ||  '}
              <Link to="/About">About</Link>
              {'  ||  '}
              <Link to="/ Favorites"> Favorites</Link>
            </nav>
            <Route exact path="/App" component={App} />


            <Route path="/AddNewLiterature" component={() => < AddNewLiterature
              addNewItem={this.addNewItem}
            />} />

            <Route path="/Literature" component={() => < Literature literatureBook={this.state.author}

            />} />

            <Route path="/LinesOfAuthor" component={() => <LinesOfAuthor literaturelines={this.state.author}
            />} />
            <Router path="/Favorites" component={() => <Favorites onFaveToggle={this.handleFaveToggle} />} />

            <Route path="/About" component={About} />
          </div>
        </Router>
      </div>
    )
  }
}