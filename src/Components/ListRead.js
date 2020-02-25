import React from 'react'
import { render } from '@testing-library/react'
import Favorites from './Favorites'

export default class ListRead extends React.Component {
    render() {
        const favs = this.props.favs
        const readList = favs.map((Item) => {

            return (
                < Favorites Item={Item.title} />


            )


        })
        console.log(readList)
        return (
            < div > {readList}
                <h1>Hello</h1>
            </div>

        )

    }
}


// Favorites List(Container) props[favs = this.state.favs[]]
// this.props.favs[].map => return Favorite Item props[objTitle]
// Favorite Item: return (DIV title, author, content)