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
                            <li><Link to='/races'>Races</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                        </ul>
                    </div>
                    <div className="footer-terms">
                        <p>All images on site are from the game World of Warcraft® and belongs to ©2004 Blizzard Entertainment, Inc.</p>
                        <p>©2004 Blizzard Entertainment, Inc. All rights reserved. World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.</p>
                    </div>
                </div>
            </footer>
        );
    }
}
