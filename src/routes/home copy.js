import React from 'react';

import './pages.css'

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const home = props => {

    return (
        <div className="home-container">
            {/* <img className="my-image" src={require('../images/Photo-43.jpg')} alt=""/> */}
            {/* <img src="https://cdnb.artstation.com/p/assets/images/images/010/943/723/large/haseeb-khan-girl-finalized.jpg?1527064118" alt=""/> */}
            <div className="landing-text">
                <div className="column">
                    <div className="row">
                        <h1 className="regular-logo-text">I</h1>
                        <h1 className="regular-logo-text">IV</h1>
                        <h1 className="regular-logo-text">IVA</h1>
                        <h1 className="regular-logo-text">IVAN</h1>
                        <h1 className="regular-logo-text">IVAN Y</h1>
                        <h1 className="regular-logo-text full">IVAN YU</h1>
                        <h1 className="regular-logo-text">IVAN Y</h1>
                        <h1 className="regular-logo-text">IVAN</h1>
                        <h1 className="regular-logo-text">IVA</h1>
                        <h1 className="regular-logo-text">IV</h1>
                        <h1 className="regular-logo-text">I</h1>
                    </div>

                    <section class="wrapper">
                        <div className="rotating-text">
                            <div>Software Designer.</div>
                            <div>Recent Graduate.</div>
                            <div>Photographer.</div>
                        </div>
                    </section>

                </div>
            </div>
            {/* <div><p>about me</p></div> */}
            <br />
            <div className="dog">
                <div className="arrow">
                    <FontAwesomeIcon icon={faChevronDown} size="2x"></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default home;
