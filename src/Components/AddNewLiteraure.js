import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class AddNewLiterature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      object: ""
    };
  }

  handleChangeInputText = e => {
    console.log("On Text Change", e.target.value);
    this.setState({
      term: e.target.value
    });
  };
  handleChangeTextarea = e => {
    console.log("On Text Change", e.target.value);
    this.setState({
      object: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div class="form-group">
          <label className="TitleOfInput" for="formGroupExampleInput">
            {" "}
            Add New Title{" "}
          </label>

          <input
            className="form-control"
            id="addtitle"
            type="text"
            placeholder="Literature Title"
            value={this.state.term}
            onChange={this.handleChangeInputText}
          />

          <label className="TitleOfInput" for="comment">
            {" "}
            Write Literature :
          </label>
          <textarea
            type="text"
            className="form-control"
            id="comment"
            name="Literature"
            value={this.state.object}
            onChange={this.handleChangeTextarea}
          />
          <Link to="/Literature">
            <input
              className="submit"
              type="submit"
              value="Post"
              onClick={() =>
                this.props.addNewItem(this.state.term, this.state.object)
              }
            />
          </Link>
        </div>
      </div>
    );
  }
}
