import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './header/index';
import Footer from './footer/index';
import Leftbar from './leftbar/index';
import FastClick from 'fastclick';

class App extends Component {
  componentWillMount() {
    //Because Apple likes to make things difficult for web developers...
    this.startFastclick();
  };
  startFastclick() {
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    };
  };
  render() {
    return (
      <div className="app">
        <Header />
        <Leftbar />
        <Footer />
      </div>
    );
  };
};

export default connect(null, {})(App);
