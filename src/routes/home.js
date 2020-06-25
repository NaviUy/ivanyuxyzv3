import React from 'react';

import './pages.css'

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const home = props => {

    return (

    <div className="container">
        {/* SECTION A */}
        <div className="section-a grid">
            <h1>About Me:</h1>
            <img src={require("../images/PHOTO-27.jpg")} alt=""></img>
            <p>My name is Ivan Yu. I am an aspiring software designer who recently graduated
                from the California State University of Los Angeles with a bachelor’s in computer
                 science. My goal is to become a full stack web developer.</p>
        </div>
        {/* SECTION B */}
        <div className="section-b grid">
            <h1>Favorite Development Tools:</h1>
            <ul className="fav-tools">
                <li>Visual Studio Code</li>
                <li>Android Studios</li>
                <li>Eclipse</li>
                <li>Github</li>
            </ul>
        </div>
        {/* SECTION C */}
        <div className="section-c grid">
            <h1>Projects:</h1>
        </div>
        {/* SECTION D */}
        <div className="section-d grid">
            <h1>Resume:</h1>
        </div>
        {/* SECTION E */}
        <div className="section-e grid">
            <h1>Hobbies:</h1>
            <ul className="hobbies">
                <li>Learning new technologies</li>
                <li>Photography</li>
                <li>Swimming</li>
            </ul>
        </div>
        {/* SECTION F */}
        <div className="section-f grid">
            <h1>Photography:</h1>
        </div>
        {/* SECTION G */}
        <div className="section-g grid">
            <h1>Contact Me:</h1>
        </div>
        {/* FOOTER */}
        <div className="footer">
            <p>Designed by: Ivan Yu</p>
        </div>
    </div>


    );
}

export default home;
