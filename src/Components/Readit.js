import React from "react";

import LinesOfAuthor from "./LinesOfAuthor";
import Literature from "./Literature";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Readit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSelect: []
      // checked: false
    };
  }
  clickRemoveOne = e => {
    console.log("Hi");
    this.props.deletedbook();
  };

  render() {
    const favorirestitle = this.props.faves.map((oneBookTitle, i) => {
      return (
        <div className="titleofLit">
          {/* <input
                  type="button"
                  name="oneBookTitle"
                  value={this.props.checkes}
                  onChange={e => this.props.handlechangeToggle(e)}
                /> */}

          {/* <input
                type="button"
                value="click"
                onClick={() => this.state.clickRemoveOne}
              /> */}
          {/* Select to delete{" "}
              </input> */}
          <Link to="/LinesOfAuthor"> {oneBookTitle}</Link>
          <button
            className="btn btn-dark"
            onClick={() => this.props.handleRemover(oneBookTitle)}
          >
            Remove
          </button>
        </div>
      );
    });
    return (
      <div>
        {favorirestitle}
        <button
          className="btn btn-dark"
          onClick={() => this.props.clickToRemoveAll()}
        >
          Clear All
        </button>
      </div>
    );
  }
}
