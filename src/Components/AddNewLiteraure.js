import React from 'react'

export default class AddNewLiterature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }
    onTextBoxChange = (e) => {
        console.log('On Text Change', e.target.value);
        this.setState({
            newItem: e.target.value
        });
    }

    handleChangeInputText = (e) => {
        console.log('On Text Change', e.target.value);
        this.setState({
            term: e.target.value
        });
    }
    render() {

        return (
            <div>

                <input type="text" placeholder="Literature Title" value={this.state.term}
                    onChange={this.handleChangeInputText} />

                <br></br>
                <br></br>
                {/* <textarea name="Literature" rows='10' cols='30' value={this.props.newItem}
                    onChange={this.props.onTextBoxChange} /> */}
                <br></br>
                <br></br>

                <input type="button" value="Post" onClick={() => this.props.addNewItem(this.state.term)} />

            </div>
        )

    }
}


