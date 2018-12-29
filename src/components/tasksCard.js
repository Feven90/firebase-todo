
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'bootstrap';
// import apiKeys from '../db/apiKeys.json';
import authHelpers from '../helpers/authHelpers';

import getAllTasks from '../helpers/dataGetter';
import deleteIcon from '../images/deleteIcon.jpeg';
// import './tasksCard.scss';

const creatCards = (tasks) => {
  let domString = '';
  //   let print = '';
  domString += '<h2 class="header">Tasks To Complete</h2>';
  tasks.forEach((task) => {
    if (task.isCompleted === false) {
      domString += `<div class="task-page" > 
              <div class="card-body">
              <div class="d-flex flex-row">
              <input class="form-check-input is-completed-checkbox" type="checkbox" id="${task.id}">
              <h3 class="tasks-to-compelete justify-content-center">${task.task}</h3>
              <img src="${deleteIcon}" width="20px" height="20px" class="btn-danger delete-btn" data-delete-id=${task.id}>
              <button class="btn-info edit-btn" data-edit-id=${task.id}>Edit</button>
              </div>
              </div>
              </div>`;
    }
  });
  $('#tasks').html(domString);
};

const completedTasks = (tasks) => {
  let print = '';
  print += '<h2>Completed Tasks</h2>';
  tasks.forEach((task) => {
    if (task.isCompleted) {
      print += `<div class="d-flex flex-row justify-content-center task-page"> 
      <h3 class="completed">${task.task}</h3>
      <img src="${deleteIcon}" width="20px" height="20px" class="btn-danger delete-btn" data-delete-id=${task.id}>
      </div>`;
    }
  });
  $('#completed-tasks').html(print);
  $('.completed').attr('checked', true);
  $('.completed').css('text-decoration', 'line-through');
};

const getTasks = () => {
  const uid = authHelpers.getCurrentUid();
  getAllTasks.getAllTasksFromDb(uid)
    .then((allTasksArrary) => {
      creatCards(allTasksArrary);
      completedTasks(allTasksArrary);
    // .then((allTasksArrary) => {
    //     $('tasks-card').html(creatCards(allTasksArrary.data));
    //   });
    })
    .catch((error) => {
      console.error(error);
    });
};
const deleteTask = (e) => {
  // firebase id
  const idToDelete = e.target.dataset.deleteId;
  getAllTasks.deleteTask(idToDelete)
    .then(() => {
      getTasks();
      // $('#single-container').html('');
    })
    .catch((error) => {
      console.log('error in deleting friend', error);
    });
};
const updateIsCompleted = (e) => {
  const taskId = e.target.id;
  const isCompleted = e.target.checked;
  getAllTasks.updateIsCompleted(taskId, isCompleted)
    .then(() => {
      getTasks();
    })
    .catch((err) => {
      console.error('error in updating flag', err);
    });
};

$('body').on('click', '.delete-btn', deleteTask);
$('body').on('change', '.is-completed-checkbox', updateIsCompleted);

const initializeTasksPage = () => {
  getTasks();
};

export default initializeTasksPage;
