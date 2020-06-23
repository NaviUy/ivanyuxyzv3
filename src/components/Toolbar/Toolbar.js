import React from 'react';

import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import  { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><a href="/">Ivan Yu</a></div>
            <div className="spacer-mobile"></div>
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} buttonAnimation={props.buttonAnimation}/>
            </div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Photography</a></li>
                    <li><a href="/">Contact</a></li>
                    <li>
                        <div className="socialMediaIcon"><a href="/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></div>
                        <div className="socialMediaIcon"><a href="/"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></div>
                        <div className="socialMediaIcon"><a href="/"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
