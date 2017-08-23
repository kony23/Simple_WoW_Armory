//pageHeader.jsx

import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

export default class PageHeader extends React.Component{
    render(){
        return(
            <header className="page-header">
                    <div className="nav-wrap">
                        <a className="page-logo" href="">
                            <img src="images/logo.png" width="100" height="100" alt="WoW Armory" />
                        </a>
                        <nav className="page-nav">
                            <ul>
                                <li><Link to='/'>Armory</Link></li>
                                <li><Link to='/rasy'>Rasy</Link></li>
                                <li><Link to='/klasy'>Klasy</Link></li>
                                <li><Link to='/omnie'>O mnie</Link></li>
                            </ul>
                        </nav>
                    </div>
            </header>
        );
    }
}
