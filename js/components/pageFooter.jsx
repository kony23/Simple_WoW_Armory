//pageFooter.jsx

import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

export default class PageFooter extends React.Component{
    render(){
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="footer-nav">
                        <ul>
                            <li><Link to='/'>Armory</Link></li>
                            <li><Link to='/rasy'>Rasy</Link></li>
                            <li><Link to='/klasy'>Klasy</Link></li>
                            <li><Link to='/omnie'>O mnie</Link></li>
                        </ul>
                    </div>
                    <div className="footer-terms">
                        <p>Wszystkie grafiki na stronie pochodzą z gry World of Warcraft® i należą do ©2004 Blizzard Entertainment, Inc.</p>
                        <p>©2004 Blizzard Entertainment, Inc. Wszystkie prawa zastrzeżone. World of Warcraft, Warcraft i Blizzard Entertainment są znakami towarowymi lub zarejestrowanymi znakami towarowymi Blizzard Entertainment, Inc. w USA i/lub innych krajach.</p>
                    </div>
                </div>
            </footer>
        );
    }
}
