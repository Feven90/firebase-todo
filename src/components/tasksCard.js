
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'bootstrap';

// import apiKeys from '../db/apiKeys.json';

import getAllTasksFromDb from '../helpers/dataGetter';

const creatCards = (tasks) => {
  tasks.forEach((task, i) => {
    let domString = '';
    if (`${tasks.isCompleted}` === 'true') {
      domString = `<div> 
    <div class="img-holder">
        <img class="tasks-img" src="${task[i].img}"> 
    </div>
    <h3>${task[i].task}</h3>
    </div>`;
    }
    $('#tasks-card').html(domString);
  });
};

const getTasks = () => {
  getAllTasksFromDb().then((allTasksArrary) => {
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

export default getTasks;
