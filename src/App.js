import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link
} from "react-router-dom";
import axios from "axios";

import AddNewLiterature from "./Components/AddNewLiteraure";
import LinesOfAuthor from "./Components/LinesOfAuthor";
import Literature from "./Components/Literature";
import About from "./Components/About";
import Readit from "./Components/Readit";
import HomePage from "./Components/Home";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: [],
      faves: [],
      checkes: false
    };
  }

  toFiltervalue = newFilterArra => {
    this.setState({
      author: newFilterArra
    });
  };
  // add title to fave page
  handleFaveToggle = title => {
    let faves = this.state.faves.slice();
    let titleIndex = faves.indexOf(title);

    if (titleIndex === -1) {
      this.setState({
        faves: [...this.state.faves, title]
      });
      console.log(`Adding To Read it `);
    }
  };
  handleRemover = t => {
    let faves = this.state.faves.slice();
    let titlesIndex = faves.indexOf(t);
    console.log(t, titlesIndex);

    if (titlesIndex !== -1) {
      faves.splice(titlesIndex, 1);
      this.setState({
        faves
      });
    }
    console.log(`Removing From Read it `);
  };

  // to add new title and object
  addNewItem = (newTitleTerm, newObjectTerm) => {
    this.setState({
      author: [
        ...this.state.author,
        { title: newTitleTerm, lines: newObjectTerm }
      ]
    });
  };
  //to Clear all fave
  clickToRemoveAll = () => {
    console.log("remove");

    this.setState({
      faves: []
    });
  };

  handelCheckbox = title => {
    console.log("hi");
    title.checkes = !title.checkes;
    console.log(title);
  };

  deletedbook = () => {
    console.log(this.state.faves);
    const favebook = this.state.faves.filter(e => !e.checkes);
    this.setState({
      faves: favebook
    });
  };

  // use  axios to get title and liens
  componentDidMount() {
    axios({
      method: "get",
      url: "http://poetrydb.org/author/William%20Shakespeare"
    })
      .then(succ => {
        console.log(succ, "succ");
        console.log(succ.data, "succ.data");

        this.setState({
          author: succ.data
        });
        console.log(this.state.author, "author");
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  render() {
    return (
      <div>
        <div>
          <header>William Shakespeare</header>
        </div>

        <Router>
          <div className="classes.root">
            <nav className="navbar navbar-dark bg-dark">
              <Link to="/Home">Home</Link>
              <Link to="/Literature">Literature</Link>

              {/* <Link to='/LinesOfAuthor'>LinesOfAuthor</Link> */}

              <Link to="/About">About</Link>

              <Link to="/Readit"> Readit</Link>
            </nav>
            <Route exact path="/Home" component={HomePage} />

            <Route
              path="/AddNewLiterature"
              component={() => (
                <AddNewLiterature addNewItem={this.addNewItem} />
              )}
            />

            <Route
              path="/Literature"
              component={() => (
                <Literature
                  literatureBook={this.state.author}
                  handleFaveToggle={this.handleFaveToggle}
                  addToFav={this.addToFav}
                  clickToRemoveAll={this.clickToRemoveAll}
                  toFiltervalue={this.toFiltervalue}
                  handleRemover={this.handleRemover}
                />
              )}
            />

            <Route
              path="/LinesOfAuthor"
              component={() => (
                <LinesOfAuthor literaturelines={this.state.author} />
              )}
            />
            <Route
              path="/Readit"
              component={() => (
                <Readit
                  faves={this.state.faves}
                  handelCheckbox={this.handelCheckbox}
                  handleFaveToggle={this.handleFaveToggle}
                  clickToRemoveAll={this.clickToRemoveAll}
                  clickToRemoveOne={this.clickToRemoveOne}
                  handlechangeToggle={this.handlechangeToggle}
                  checkes={this.state.checkes}
                  toRemoveItem={this.toRemoveItem}
                  deletedbook={this.deletedbook}
                  handleRemover={this.handleRemover}
                />
              )}
            />

            <Route path="/About" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}
