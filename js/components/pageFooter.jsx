//pageFooter.jsx

import React from 'react';

export default class PageFooter extends React.Component{
    render(){
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="footer-nav">
                        <ul>
                            <li><a href="">Armory</a></li>
                            <li><a href="">Rasy</a></li>
                            <li><a href="">Klasy</a></li>
                            <li><a href="">O mnie</a></li>
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
