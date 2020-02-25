import React from 'react'

export default class AddNewLiterature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "",
            object: ""
        }
    }


    handleChangeInputText = (e) => {
        console.log('On Text Change', e.target.value);
        this.setState({
            term: e.target.value
        });
    }
    handleChangeTextarea = (e) => {
        console.log('On Text Change', e.target.value);
        this.setState({
            object: e.target.value
        });
    }



    render() {

        return (
            <div>

                <input type="text" placeholder="Literature Title" value={this.state.term}
                    onChange={this.handleChangeInputText} />

                <br></br>
                <br></br>
                <textarea name="Literature" rows='10' cols='30' value={this.state.object}
                    onChange={this.handleChangeTextarea} />
                <br></br>
                <br></br>

                <input type="button" value="Post" onClick={() =>
                    this.props.addNewItem(this.state.term, this.state.object)}
                >
                </input>

            </div >
        )

    }
}


