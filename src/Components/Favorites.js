import React from 'react'

export default class Favorites extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    handleFaveClick = () => {
        console.log("handling Fave click!", this.props.isFave);
        this.props.onFaveToggle()

    }
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div
                className={`film-row-fave ${isFave}`} >
                <button onClick={handleFaveClick}>{isFave}</button>
            </div >
        )
    }
}