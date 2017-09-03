import React from 'react';

export default class SectionRaces extends React.Component{
    render(){
        return(
            <section className="section-races-classes">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="grid-col-12">
                            <div className="welcome">
                                <h1>Races</h1>
                                <p>Whether as a stalwart defender of the Alliance, or a fierce guardian of the Horde, deciding which race to play will define who you'll fight for in this neverending war. Where do your loyalties lie?</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <div className="faction">
                                <span>Alliance</span>
                                <div className="logo">
                                    <img className="alliance" src="images/allylogo.png"/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image human"></div>
                                <div className="content">
                                    Human
                                    <p>Though humans are among the younger races on Azeroth, they have faced many challenges with fortitude and resilience.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image dwarf"></div>
                                <div className="content">
                                    Dwarf
                                    <p>The bold and courageous dwarves are an ancient race descended from the earthen-beings of living stone created by the titans when the world was young.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image nelf"></div>
                                <div className="content">
                                    Night Elf
                                    <p>The ancient and reclusive night elves have played a pivotal role in shaping Azeroth’s fate throughout its history.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image gnome"></div>
                                <div className="content">
                                    Gnome
                                    <p>The clever, spunky, and oftentimes eccentric gnomes present a unique paradox among the civilized races of Azeroth.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image draenei"></div>
                                <div className="content">
                                    Draenei
                                    <p>Armed with their unshakable faith in the Light, the draenei ventured to their embattled former home as steadfast members of the Alliance and defeated their ancient demonic rivals.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image worgen"></div>
                                <div className="content">
                                    Worgen
                                    <p>Behind the formidable Greymane Wall, a terrible curse transformed some of the stalwart citizens of the isolated kingdom of Gilneas into nightmarish lupine beasts known as worgen.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image panda"></div>
                                <div className="content">
                                    Pandaren
                                    <p>The wise pandaren embrace harmony, and lead full lives of food, family and fights on Pandaria. A few leave their home to join the Alliance, where they embody righteousness and honor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-col-6">
                            <div className="faction">
                                <span>Horde</span>
                                <div className="logo">
                                    <img className="horde" src="images/hordelogo.png"/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image orc"></div>
                                <div className="content">
                                    Orc
                                    <p>Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image undead"></div>
                                <div className="content">
                                    Undead
                                    <p>When the Lich King’s grasp on his vast armies faltered after the Third War, a contingent of undead broke free of their master’s iron will.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image tauren"></div>
                                <div className="content">
                                    Tauren
                                    <p>The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image troll"></div>
                                <div className="content">
                                    Troll
                                    <p>The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image belf"></div>
                                <div className="content">
                                    Blood Elf
                                    <p>During the Third War, the glorious high elves of Quel’Thalas were nearly scoured from Azeroth. Now, they struggle to rebuild their once-great society and overcome their dependence on magic.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image goblin"></div>
                                <div className="content">
                                    Goblin
                                    <p>Reforging old pacts with their collegues' one-time allies, the goblins of the Bilgewater Cartel have been welcomed into the Horde with open arms.</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image pandh"></div>
                                <div className="content">
                                    Pandaren
                                    <p>The wise pandaren embrace harmony, and lead full lives of food, family and fights on Pandaria. A few leave their home to side with the Horde and act decisively to protect themselves and others.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
