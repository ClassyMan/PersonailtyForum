import React, { Component } from 'react';
import Post from './Post.js';
import Thread from './Thread.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <style>@import 'https://fonts.googleapis.com/css?family=Raleway';</style>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Third Wave Coffee</h2>
        </div>
        <p className="App-intro">
        <br></br>
          <Thread />
        </p>
      </div>
    );
  }
}

export default App;
