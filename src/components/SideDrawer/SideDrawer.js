import React from 'react';

import './SideDrawer.css'

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import  { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Photography</a></li>
            <li><a href="/">Contact</a></li>
            <li>
                <div className="socialMediaIcon-sidedrawer"><a href="/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></div>
                <div className="socialMediaIcon-sidedrawer"><a href="/"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></div>
                <div className="socialMediaIcon-sidedrawer"><a href="/"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></div>
            </li>
        </ul>
    </nav>
);
};

export default sideDrawer;
