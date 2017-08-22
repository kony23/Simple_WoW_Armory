import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader.jsx';
import SectionArmory from './components/sectionArmory.jsx';
import PageFooter from './components/pageFooter.jsx';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
require('../sass/main.scss');



console.log("Simple WoW Armory");

document.addEventListener('DOMContentLoaded', function(){


    class Template extends React.Component{
        render(){
            return(
                <div className="wrapper">
                    <PageHeader/>
                    <SectionArmory/>
                    <PageFooter/>
                </div>
            )
        }
    }

    class Races extends React.Component{
        render(){
            return(
                <h1>Podstrona w budowie</h1>
            )
        }
    }

    class Classes extends React.Component{
        render(){
            return(
                <h1>Podstrona w budowie</h1>
            )
        }
    }

    class AboutMe extends React.Component{
        render(){
            return(
                <h1>Podstrona w budowie</h1>
            )
        }
    }

    class App extends React.Component{
        render(){
            // return(
            //     <Router>
            //         <Route path='/' component={Template}>
            //             <IndexRoute component={SectionArmory}/>
            //             <Route path='/rasy' component={Races}/>
            //             <Route path='/klasy' component={Classes}/>
            //             <Route path='/omnie' component={AboutMe}/>
            //         </Route>
            //     </Router>
            // );
            return(
                <div className="wrapper">
                    <PageHeader/>
                    <SectionArmory/>
                    <PageFooter/>
                </div>
            )
        }
    }



    ReactDOM.render(
    <App />,
    document.getElementById("app"));



});
