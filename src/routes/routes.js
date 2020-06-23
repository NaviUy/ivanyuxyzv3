import React from "react";
import SideDrawer from '../components/SideDrawer/SideDrawer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './home';


const routes = props => {
    // console.log(props.show)

    return (
        <Router>
            <div>
                <Switch>>
                    <Route path="/" component={Home} />
                </Switch>
            </div>

            <SideDrawer show={props.show} click={props.drawerClickHandler}/>

        </Router>);

}


export default routes;
