import React from 'react'
import { render } from '@testing-library/react'
import ListRead from './ListRead'

export default class Favorites extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            includes: []
        }
    }
    clickToAddFaves(handel) {
        console.log()
        this.props.handleFaveToggle()

    }
    render() {


        return <div>
            {this.props.isFave}
            <h1>vhvh</h1>
        </div>




    }
}