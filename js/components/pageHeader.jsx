//pageHeader.jsx

import React from 'react';

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
                                <li><a>Armory</a></li>
                                <li><a>Rasy</a></li>
                                <li><a>Klasy</a></li>
                                <li><a>O mnie</a></li>
                            </ul>
                        </nav>
                    </div>
            </header>
        );
    }
}
