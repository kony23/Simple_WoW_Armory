import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader.jsx';
import SectionArmory from './components/sectionArmory.jsx';
import PageFooter from './components/pageFooter.jsx';
import SectionRaces from './components/sectionRaces.jsx';
import SectionClasses from './components/sectionClasses.jsx';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
require('../sass/main.scss');



console.log("Simple WoW Armory");

document.addEventListener('DOMContentLoaded', function(){


    class Template extends React.Component{
        render(){
            return(
                <div className="wrapper">
                    <PageHeader/>
                    {this.props.children}
                    <PageFooter/>

                </div>
            )
        }
    }

    class Races extends React.Component{
        render(){
            return(
                <SectionRaces/>
            )
        }
    }

    class Classes extends React.Component{
        render(){
            return(
                <SectionClasses/>
            )
        }
    }


    class App extends React.Component{
        render(){
            return(
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={SectionArmory}/>
                        <Route path='/races' component={Races}/>
                        <Route path='/classes' component={Classes}/>
                    </Route>
                </Router>
            );
        }
    }

    ReactDOM.render(
    <App />,
    document.getElementById("app"));

});
