import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = (initializeTasksPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks-card').show();
      $('#navbar-button-logout').show();
      console.log(initializeTasksPage);
      initializeTasksPage();
    } else {
      $('#auth').show();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
