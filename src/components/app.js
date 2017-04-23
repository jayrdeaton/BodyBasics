import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './header/index';
import Footer from './footer/index';
import Leftbar from './leftbar/index';

class App extends Component {
  render() {
    return (
      <div className="app">
      </div>
    );
  };
};

export default connect(null, {  })(App);
