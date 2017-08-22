import React from 'react';
import ArmorySearch from './armorySearch.jsx';


export default class SectionArmory extends React.Component{
    render(){
        return(
            <section className="section-armory">
                <div className="container">
                    <div className="armory-welcome">
                        <h1>Witaj na mojej stronie o grze World of Warcraft!</h1>
                        <p>Poniżej możesz zobaczyć swoją postać i sprawdzić jej statystyki na wybranym serwerze</p>
                    </div>
                    <ArmorySearch/>
                </div>
            </section>
        );
    }
}
