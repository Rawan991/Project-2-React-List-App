import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/core/IconButton";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSelect: [],
      checked: false
    };
  }
  clickRemoveOne = e => {
    console.log("Hi");
    this.props.deletedbook();
  };

  render() {
    return (
      <div>
        {this.props.faves.map((oneBookTitle, i) => {
          return (
            <div>
              <input
                type="checkbox"
                name="oneBookTitle"
                value={this.props.checkes}
                // onChange={this.props.clickToRemoveOne}
              />
              <button onClick={() => this.clickRemoveOne()}>
                Select to delete{" "}
              </button>
              {oneBookTitle}
            </div>
          );
        })}
        <IconButton aria-label="delete">
          <DeleteIcon onClick={() => this.props.clickToRemoveAll()}>
            {" "}
            Clear{" "}
          </DeleteIcon>
        </IconButton>

        <br></br>
      </div>
    );
  }
}
