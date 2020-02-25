import React from 'react'



export default class Favorites extends React.Component {


    render() {
        return (
            <div>
                <form>
                    {
                        this.props.faves.map((oneBookTitle, i) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={this.props.checkes}
                                        name="oneBookTitle"
                                    />

                                    {oneBookTitle}

                                </div>
                            )
                        })
                    }
                    < input
                        type="submit"
                        value="delete"
                        onChange={(e) => this.props.clickToRemoveOne(e, oneBookTitle)} />


                </form>
                <button onClick={() => this.props.clickToRemoveAll()}> Clear </button>

                <br>
                </br>
            </div >
        )
    }
}