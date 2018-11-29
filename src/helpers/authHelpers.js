import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import 'bootstrap';

const checkLoginStatus = (initializeTasksPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks-card').show();
      $('#navbar-button-logout').show();
      $('#auth').hide();
      $('#tasks').show();
      console.log(initializeTasksPage);
      initializeTasksPage();
    } else {
      $('#auth').show();
      $('#tasks-card').hide();
      $('#navbar-button-logout').hide();
      $('#tasks').hide();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
