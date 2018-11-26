// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';
import getAllTasks from './components/tasksCard';
import loginButton from './components/Auth/auth';
import createNavbar from './components/Navbar/navbar';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
  getAllTasks.getTasks();
};

initializeApp();
