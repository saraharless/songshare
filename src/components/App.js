import React, { Component } from 'react';
import '../styles/App.css';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import NavBar from './NavBar.js';

export default class App extends Component {
  render() {
    return (

      <div className="App">

      <NavBar/>
      <div>
        <h1>Song Share</h1>
      </div>
      <PlayListForm/>
      <PlayList/>
      </div>

    );
  }
}
