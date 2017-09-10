import React from 'react';

export default class SectionRaces extends React.Component{
    render(){
        return(
            <section className="section-races-classes">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="grid-col-12">
                            <div className="welcome">
                                <h1>Classes</h1>
                                <p>From knights in shiny armor to skulking stalkers and cunning spellcasters, each class in World of Warcraft presents unique challenges and gameplay for you to master. What is your calling?</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <div className="box">
                                <div className="image warrior"></div>
                                <div className="content">
                                    Warrior
                                    <p>Tank, Damage</p>
                                    <p>For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat.</p>
                                    </div>
                            </div>
                            <div className="box">
                                <div className="image hunter"></div>
                                <div className="content">
                                    Hunter
                                    <p>Damage</p>
                                    <p>From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters.</p>
                                    </div>
                            </div>
                            <div className="box">
                                <div className="image priest"></div>
                                <div className="content">
                                    Priest
                                    <p>Healer, Damage</p>
                                    <p>Priests are devoted to the spiritual, and express their unwavering faith by serving the people. For millennia they have left behind the confines of their temples and the comfort of their shrines so they can support their allies in war-torn lands.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image shaman"></div>
                                <div className="content">
                                    Shaman
                                    <p>Healer, Damage</p>
                                    <p>Shaman are the spiritual leaders of their tribes and clans. They are masters of the elements, using spells and totems that heal or enhance their allies in battle while unleashing the fury of the elements upon their foes.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image warlock"></div>
                                <div className="content">
                                    Warlock
                                    <p>Damage</p>
                                    <p>In the face of demonic power, most heroes see death. Warlocks see only opportunity. Dominance is their aim, and they have found a path to it in the dark arts. These voracious spellcasters summon demonic minions to fight beside them.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image druid"></div>
                                <div className="content">
                                    Druid
                                    <p>Tank, Healer, Damage</p>
                                    <p>Druids harness the vast powers of nature to preserve balance and protect life. As master shapeshifters, druids can take on the forms of a variety of beasts, each focused on a specific combat role.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid-col-6">
                            <div className="box">
                                <div className="image paladin"></div>
                                <div className="content">
                                    Paladin
                                    <p>Tank, Healer, Damage</p>
                                    <p>This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image rogue"></div>
                                <div className="content">
                                    Rogue
                                    <p>Damage</p>
                                    <p>For rogues, the only code is the contract, and their honor is purchased in gold. Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image dk"></div>
                                <div className="content">
                                    Death Knight
                                    <p>Tank, Damage</p>
                                    <p>When the Lich King’s control of his death knights was broken, his former champions sought revenge for the horrors committed under his command.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image mage"></div>
                                <div className="content">
                                    Mage
                                    <p>Damage</p>
                                    <p>Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image monk"></div>
                                <div className="content">
                                    Monk
                                    <p>Tank, Healer, Damage</p>
                                    <p>Bare-knuckle brawlers whose no-weapon styles were born in ancient Pandaria, monks are as diverse as the energy that surrounds them. They can shoulder deadly attacks through the haze of their brews, heal broken chi flows, and beat their enemies with wind-quick fists and feet.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image dh"></div>
                                <div className="content">
                                    Demon Hunter
                                    <p>Tank, Damage</p>
                                    <p>Demon hunters embrace the forbidden powers of the Legion. They make use of fel and chaotic magics, metamorphosis abilities, spectral sight, and hellish agility to hunt down and defeat even the most dangerous adversaries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
