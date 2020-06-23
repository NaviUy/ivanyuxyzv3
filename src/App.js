import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
// import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Routes from './routes/routes';

class App extends Component {

state = {
    sideDrawerOpen: false,
    isOpen: false
  };

  drawToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen, isOpen: !prevState.isOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false, isOpen:false});
  };

  render () {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} / >;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawToggleClickHandler} buttonAnimation={this.state.isOpen} />
          <Routes show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
          {backdrop}

          </div>
        </header>
      </div>
    );
  }

}

export default App;
