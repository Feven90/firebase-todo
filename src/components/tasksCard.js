
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'bootstrap';
// import apiKeys from '../db/apiKeys.json';
import authHelpers from '../helpers/authHelpers';

import getAllTasks from '../helpers/dataGetter';

const creatCards = (tasks) => {
  let domString = '';
  tasks.forEach((task) => {
    if (task.isCompleted === false) {
      domString += `<div> 
    <h3>${task.task}</h3>
    <button class="btn-danger delete-btn" data-delete-id=${task.id}>X</button>
    <button class="btn-info edit-btn" data-edit-id=${task.id}>Edit</button>
    </div>`;
    }
  });
  console.log(domString);
  $('#tasks').html(domString);
};

const getTasks = () => {
  const uid = authHelpers.getCurrentUid();
  getAllTasks.getAllTasksFromDb(uid)
    .then((allTasksArrary) => {
      creatCards(allTasksArrary);
    // .then((allTasksArrary) => {
    //     $('tasks-card').html(creatCards(allTasksArrary.data));
    //   });
    })
    .catch((error) => {
      console.error(error);
    });
};

const initializeTasksPage = () => {
  getTasks();
};

export default initializeTasksPage;
