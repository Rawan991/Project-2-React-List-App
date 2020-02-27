import React from "react";

export default class Update extends React.Component {
  render() {
    const change = this.props.faves.map(oneBookTitle => {
      return (
        <input
          key={oneBookTitle}
          name="list"
          type="checkbox"
          onClick={this.props.clickToRemoveOne(oneBookTitle)}
        />
      );
    });
  }
}
