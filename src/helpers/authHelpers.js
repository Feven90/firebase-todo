import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = (initializeFriendsPage) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks-card').show();
      initializeFriendsPage();
    } else {
      $('#auth').show();
    }
  });
};

// const getCurrentUid = () => firebase.auth().currentUser.uid;

export default checkLoginStatus;
