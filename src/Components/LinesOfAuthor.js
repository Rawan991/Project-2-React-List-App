import React from 'react'



export default class LinesOfAuthor extends React.Component {


    render() {
        let literaturelines = this.props.literaturelines.map((lines) => {

            return (
                <div>
                    <h1>
                        {lines.title}
                    </h1>
                    <p>
                        {lines.lines}
                    </p>
                </div>
            )
        })
        return (
            <div>

                <fieldset>{literaturelines} </fieldset>
            </div>

        )



    }
}