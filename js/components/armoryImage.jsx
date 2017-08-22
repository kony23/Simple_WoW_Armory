import React from 'react';


export default class ArmoryImage extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const backgroundImgUrl = `url(${this.props.imageLink})`;
        const style = {
            backgroundImage: backgroundImgUrl
        }
        return (
            <div className="armory-image" style={style}>
                <div className="armory-title"><span>{this.props.characterNameFetch} {this.props.lvl} lvl {this.props.race} {this.props.characterClass}</span></div>
                <div className="armory-stats">
                    <div className="armory-stats-left">
                        <div className="armory-stats-box"><span>Strength:  {this.props.strength}</span></div>
                        <div className="armory-stats-box"><span>Agility:  {this.props.agility}</span></div>
                        <div className="armory-stats-box"><span>Intelect:  {this.props.intelect}</span></div>
                        <div className="armory-stats-box"><span>Stamina:  {this.props.stamina}</span></div>
                    </div>
                    <div className="armory-stats-right">
                        <div className="armory-stats-box"><span>Crit:  {this.props.crit}%</span></div>
                        <div className="armory-stats-box"><span>Haste:  {this.props.haste}%</span></div>
                        <div className="armory-stats-box"><span>Mastery:  {this.props.mastery}%</span></div>
                        <div className="armory-stats-box"><span>Versatility:  {this.props.versatility}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
