import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBqTJCCGYIwpH5XjASv1ZQCHlY8YiXu2uE",
  authDomain: "personalityforum-bb175.firebaseapp.com",
  databaseURL: "https://personalityforum-bb175.firebaseio.com",
  projectId: "personalityforum-bb175",
  storageBucket: "",
  messagingSenderId: "895838129359"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
