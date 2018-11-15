// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';
import getTasks from './components/tasksCard';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebase);
  getTasks();
};

initializeApp();
