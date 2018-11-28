import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap';
// import './navbar.scss';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-logout') {
      firebase.auth().signOut().then(() => {
        $('#auth').show();
        $('#tasks-card').hide();
      }).catch((err) => {
        console.error('you still logged in', err);
      });
    } else {
      $('#tasks-card').show();
      $('#auth').hide();
    }
  });
};
const createNavbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Holidays</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a id="tasks-card" class="nav-link">Tasks</a>
      </li>
      <li class="nav-item">
          <a id="navbar-button-logout" class="nav-link">Logout</a>
      </li>
    </ul>
  </div>
</nav>`;
  $('#navbar').html(domString);
  navbarEvents();
};

export default createNavbar;