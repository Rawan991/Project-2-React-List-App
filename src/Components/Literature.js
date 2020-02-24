import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddNewLiterature from './AddNewLiteraure';
import LinesOfAuthor from './LinesOfAuthor'
import Favorites from './Components/faves'


export default class Literature extends React.Component {

    // UsersPage = () => {
    //     return (
    //         <h3>Users Page</h3>
    //     );
    // }

    render() {
        let literatureBooks = this.props.literatureBook.map((titles, key) => {

            return (
                <div>
                    <li><Link to={`/LinesOfAuthor/${key.author}`}>{titles.title} </Link></li>
                    <Favorites  
                    isFave={this.props.faves.includes(titles)}
                    onFaveToggle={this.props.onFaveToggle}/>
                </div>
                    )
                })
        
        
                return (
            <div>


                        <p> There’s no doubt that Shakespeare has influenced English literature enormously,
                            from his impact on other authors,
                            his addition of thousands of words and phrases to the language,
                            and the continued reinterpretation of his plots, again and again.
        
                            In this section of the site, we go beyond Shakespeare to look at English literature more broadly.
                             We explore how we use the English language, and delve into the very best writers and works in the English language.
             </p>

                        <input className="inputofSearch" type="text" />

                        <button >  <Link to="/AddNewLiterature"> Add New </Link> </button>
                        <button ><Link to="/Favorites"> Favorites </Link> </button>


                        <ul>{literatureBooks}</ul>




                    </div >
                    )
                }
}