
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'bootstrap';
// import apiKeys from '../db/apiKeys.json';
import authHelpers from '../helpers/authHelpers';

import getAllTasks from '../helpers/dataGetter';

const creatCards = (tasks) => {
  console.log(tasks);
  let domString = '';
  tasks.forEach((task) => {
    if (task.isCompleted === true) {
      domString += `<div> 
    <h3>${task.task}</h3>
    </div>`;
    }
  });
  console.log(domString);
  $('#tasks').html(domString);
};

const getTasks = () => {
  const uid = authHelpers.getCurrentUid();
  console.log(uid);
  getAllTasks.getAllTasksFromDb(uid)
    .then((allTasksArrary) => {
      console.log(allTasksArrary);
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
