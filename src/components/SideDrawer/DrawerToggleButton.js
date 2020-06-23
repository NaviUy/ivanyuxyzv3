import React from 'react';

import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

const drawerToggleButton = props => (
    // <button className="toggle-button" onClick={props.click}>
    //     <div className="toggle-button__line" />
    //     <div className="toggle-button__line" />
    //     <div className="toggle-button__line" />
    // </button>
    <Burger onClick={props.click} isOpen={props.buttonAnimation} />
);

export default drawerToggleButton;
