import React from "react";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSelect: [],
      checked: false
    };
  }
  // //to Remove select item
  // clickRemoveOne = e => {
  //   console.log(e.target.checked);
  //   //   //this.state.checkes
  //   console.log(e);
  //   const faves = this.props.faves.slice();
  //   const titleIndex = faves.indexOf(e);
  //   console.log(faves);
  //   console.log(titleIndex);
  //   if (titleIndex !== -1) {
  //     faves.splice(titleIndex, 1);
  //   }
  //   this.setState({
  //     deleteSelect: faves
  //   });
  // };

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
              <button onClick={() => this.props.deletedbook()}>
                Select to delete{" "}
              </button>
              {oneBookTitle}
            </div>
          );
        })}

        <button onClick={() => this.props.clickToRemoveAll()}> Clear </button>

        <br></br>
      </div>
    );
  }
}
