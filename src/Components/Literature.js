import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNewLiterature from "./AddNewLiteraure";
import LinesOfAuthor from "./LinesOfAuthor";
import Readit from "./Readit";

export default class Literature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOfTitle: ""
    };
  }
  inputSearchChange = e => {
    // e.preventDefault();
    const textValue = e.target.value;
    // console.log('hi', textValue)
    this.setState({
      searchOfTitle: textValue
    });
  };

  handleSearch = e => {
    const filteredLiteratureBook = this.props.literatureBook.filter(title => {
      return title.title
        .toLowerCase()
        .includes(this.state.searchOfTitle.toLowerCase());
    });

    this.props.toFiltervalue(filteredLiteratureBook);
  };

  render() {
    let literatureBooks = this.props.literatureBook.map((titles, i) => {
      return (
        <div>
          <li className="titleofLits">
            <Link to={`/LinesOfAuthor/${titles.author}`}>{titles.title} </Link>
          </li>
          <button
            onClick={() => {
              this.props.handleFaveToggle(titles.title);
              //    this.props.addToFav(titles.title);
            }}
          >
            Read it
          </button>
       
        </div>
      );
    });

    return (
      <div>
        <p className={"paragraphLi"}>
          {" "}
          There’s no doubt that Shakespeare has influenced English literature
          enormously,
          <br />
          from his impact on other authors, his addition of thousands of words
          and phrases to the language, and the continued reinterpretation of his
          plots, again and again.
          <br />
          In this section of the site, we go beyond Shakespeare to look at
          English literature more broadly. We explore how we use the English
          language, and delve into the very best writers and works in the
          English language.
        </p>

        {/* Search title  */}
        <input
          className="titleSeacrh"
          placeholder={"Search for title"}
          type="text"
          value={this.state.searchOfTitle}
          onChange={e => this.inputSearchChange(e)}
        />
        <button onClick={this.handleSearch}> Search </button>

        <button className="AddNew">
          {" "}
          <Link to="/AddNewLiterature"> Add New </Link>{" "}
        </button>

        <ul>{literatureBooks}</ul>
      </div>
    );
  }
}
