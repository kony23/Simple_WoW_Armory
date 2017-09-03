import React from 'react';
import ArmorySearch from './armorySearch.jsx';


export default class SectionArmory extends React.Component{
    render(){
        return(
            <section className="section-armory">
                <div className="container">
                    <div className="armory-welcome">
                        <h1>Welcome to my site about World of Warcraft!</h1>
                        <p>Below you can check statistics of every character on US and EU servers</p>
                    </div>
                    <ArmorySearch/>
                </div>
            </section>
        );
    }
}
