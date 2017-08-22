import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/main.scss');

console.log("Simple WoW Armory");

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component{
        render(){
            return(
                <div className="wrapper">
                    <header className="page-header">
                            <div className="nav-wrap">
                                <a className="page-logo" href="">
                                    <img src="images/logo.png" width="100" height="100" alt="WoW Armory" />
                                </a>
                                <nav className="page-nav">
                                    <ul>
                                        <li><a href="">Armory</a></li>
                                        <li><a href="">Rasy</a></li>
                                        <li><a href="">Klasy</a></li>
                                        <li><a href="">O mnie</a></li>
                                    </ul>
                                </nav>
                            </div>
                    </header>

                    <section className="section-armory">
                        <div className="container">
                            <div className="armory-welcome">
                                <h1>Witaj na mojej stronie o grze World of Warcraft!</h1>
                                <p>Poniżej możesz sprawdzić statystyki swojej postaci na wybranym serwerze</p>
                            </div>
                            <div className="armory-search">
                                <form className="armory-search-form">
                                    <label htmlFor="region">Wybierz region</label>
                                    <select id="region" name="region">
                                        <option value="1">EU</option>
                                        <option value="2">US</option>
                                        <option value="3">KR</option>
                                        <option value="4">TW</option>
                                    </select>
                                    <label htmlFor="server">Podaj nazwę serwera</label>
                                    <input id="server" name="serverName" type="text"/>
                                    <label htmlFor="character">Podaj nazwę postaci</label>
                                    <input id="character" name="characterName" type="text"/>

                                    <div className="form-button"><span>Wyświetl</span></div>
                                </form>
                            </div>
                            <div className="armory-image">
                                <div className="armory-title"><span>Därnok 110 lvl Orc Warrior</span></div>
                                <div className="armory-stats">
                                    <div className="armory-stats-left">
                                        <div className="armory-stats-box"><span>Strength:</span></div>
                                        <div className="armory-stats-box"><span>Agility:</span></div>
                                        <div className="armory-stats-box"><span>Intelect:</span></div>
                                        <div className="armory-stats-box"><span>Stamina:</span></div>
                                    </div>
                                    <div className="armory-stats-right">
                                        <div className="armory-stats-box"><span>Critical strike:</span></div>
                                        <div className="armory-stats-box"><span>Haste:</span></div>
                                        <div className="armory-stats-box"><span>Mastery:</span></div>
                                        <div className="armory-stats-box"><span>Versatility:</span></div>
                                    </div>
                                </div>
                                <div className="armory-pvp"></div>
                            </div>
                        </div>
                    </section>

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
                                <p>Wszystkie grafiki na stronie pochodzą z gry World of Warcraft&reg i należą do &copy2004 Blizzard Entertainment, Inc.</p>
                                <p>&copy2004 Blizzard Entertainment, Inc. Wszystkie prawa zastrzeżone. World of Warcraft, Warcraft i Blizzard Entertainment są znakami towarowymi lub zarejestrowanymi znakami towarowymi Blizzard Entertainment, Inc. w USA i/lub innych krajach.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
    }

    ReactDOM.render(
    <App />,
    document.getElementById("app"));



});
