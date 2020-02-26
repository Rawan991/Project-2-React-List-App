import React from "react";

export default class Favorites extends React.Component {
  render() {
    return (
      <div>
        <form>
          {this.props.faves.map((oneBookTitle, i) => {
            return (
              <div>
                <input type="checkbox" name="oneBookTitle" />

                {oneBookTitle}
              </div>
            );
          })}
          <input
            type="button"
            value="delete"
            onClick={this.props.clickToRemoveOne}
          />
        </form>

        <button onClick={() => this.props.clickToRemoveAll()}> Clear </button>

        <br></br>
      </div>
    );
  }
}
