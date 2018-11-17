// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';
import getTasks from './components/tasksCard';
import loginButton from './components/Auth/auth';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  getTasks();
  loginButton();
};

initializeApp();
