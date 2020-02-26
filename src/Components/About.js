import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <div className="Aboutit">


                <h1> About it </h1>
                <img className="wil" src={process.env.PUBLIC_URL + 'Shakespeare.jpg'} alt="" />
                <label>
                    <ol>
                        <li>
                            Parents: John Shakespeare & Mary Shakespeare (nee Arden).
                </li>
                        <li>
                            Date of Birth: Generally accepted as 23rd April 1564. Shakespeare was baptised on 26th April, 1564.
                </li>
                        <li>
                            Wife: Anne Hathaway (married 1582).
                    </li>
                        <li>
                            Children: Susanna (born 1583), Hamnet & Judith (twins, born 1585).
                    </li>
                        <li>
                            Resided: Born and raised in Stratford-Upon-Avon. Prime working years spent away from family in London. Returned to family in Stratford-Upon-Avon upon retirement.
    
                    </li>
                        <li>
                            Career: Writer, actor, theatre owner and producer.
                    </li>
                        <li>
                            Body of Work: 37 plays. 149 sonnets. 2 long narrative poems.
                    </li>
                        <li>
                            Died: 23 April 1616, aged 52. Buried at Holy Trinity Church in Stratford-upon-Avon.
                    </li>
                    </ol>
                </label>
            </div>
        )
    }
}