// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';
import getTasks from './components/tasksCard';
import loginButton from './components/Auth/auth';
import createNavbar from './components/Navbar/navbar';
import loginStatus from './helpers/authHelpers';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginStatus.checkLoginStatus(getTasks);
  loginButton();
};

initializeApp();
