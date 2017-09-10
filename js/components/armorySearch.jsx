//armorySearch.jsx

import React from 'react';
import ArmoryImage from './armoryImage.jsx';
import ErrorMessage from './errorMessage.jsx';
import {getRace, getClass} from './export.js';

export default class ArmorySearch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            region: 1,
            serverName: '',
            characterName: '',
            characterNameFetch: null,
            data: false,
            lvl: null,
            race: null,
            characterClass: null,
            strength: null,
            agility: null,
            intelect: null,
            stamina: null,
            crit: null,
            haste: null,
            mastery: null,
            versatility: null,
            imageLink: null,
            errorStatus: false,
        }
    }

    handleChangeRegion = e => {
        this.setState({
            region: e.target.value
        })
    }

    handleChangeServer = e => {
        this.setState({
            serverName: e.target.value
        })
    }

    handleChangeCharacter = e => {
        this.setState({
            characterName: e.target.value
        })
    }

    handleClick = e => {
        let url = this.setURL(this.state.region ,this.state.serverName, this.state.characterName);
        this.getStats(url);

    }

    handleKeyPress = e => {
        if(e.key == 'Enter'){
            let url = this.setURL(this.state.region ,this.state.serverName, this.state.characterName);
            this.getStats(url);
        }
    }

    setURL(region, serverName, characterName){
        let url;
        let locale;
        let localeLang;
        let server = serverName.replace(/\s+/g, '-').toLowerCase();
        let character = characterName;
        if(region == 1){
            locale = "eu";
            localeLang = "en_GB";
        }else if(region == 2){
            locale = "us";
            localeLang = "en_US";
        }

        url = `https://${locale}.api.battle.net/wow/character/${server}/${character}?fields=stats&locale=${localeLang}&apikey=qj93xysvs36p4kapssx38zpt5cd7ju65`;

        return url;

    }

    getImageLink(region, link){
        let changedLink = link.replace("avatar", "main");
        let url;
        let locale;
        if(region == 1){
            locale = "eu";
        }else if(region == 2){
            locale = "us";
        }

        url = `https://render-${locale}.worldofwarcraft.com/character/${changedLink}`;

        return url;

    }

    getStats(url){
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                let raceData = getRace(data.race);

                let classData = getClass(data.class);

                let linkData = this.getImageLink(this.state.region, data.thumbnail);

                let critChance = data.stats.crit.toFixed(2);
                let hasteRating = data.stats.haste.toFixed(2);
                let masteryRating = data.stats.mastery.toFixed(2);

                this.setState({
                    data: true,
                    lvl: data.level,
                    race: raceData,
                    characterNameFetch: data.name,
                    characterClass: classData,
                    strength: data.stats.str,
                    agility: data.stats.agi,
                    intelect: data.stats.int,
                    stamina: data.stats.sta,
                    crit: critChance,
                    haste: hasteRating,
                    mastery: masteryRating,
                    versatility: data.stats.versatility,
                    imageLink: linkData,
                })
                }).catch( error => {

                    this.setState({
                        data: false,
                        errorStatus: true
                    });

                });
    }
    render(){
        let component;

        if(this.state.data){
            component = <ArmoryImage {...this.state}/>;
        } else{
            if(this.state.errorStatus){
                component = <ErrorMessage/>
            } else{
                component = null;    
            }

        }
        return(
            <div>
                <div className="armory-search">
                    <form onKeyPress={this.handleKeyPress} className="armory-search-form">
                        <label htmlFor="region">Choose region</label>
                        <select onChange={this.handleChangeRegion} value={this.state.region} id="region" name="region" >
                            <option value="1">EU</option>
                            <option value="2">US</option>
                        </select>
                        <label htmlFor="server">Enter server name</label>
                        <input onChange={this.handleChangeServer} value={this.state.serverName} autoComplete="on" id="server" name="serverName" type="text" placeholder="Burning Legion"/>
                        <label htmlFor="character">Enter character name</label>
                        <input onChange={this.handleChangeCharacter} value={this.state.characterName} autoComplete="on" id="character" name="characterName" type="text" placeholder="Därnok"/>
                        <div onClick={this.handleClick} className="form-button"><span>Display</span></div>
                    </form>
                </div>
                {component}
            </div>
        );
    }
}
