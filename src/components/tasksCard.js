
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'bootstrap';

// import apiKeys from '../db/apiKeys.json';

import dataGetter from '../helpers/dataGetter';

const creatCards = (tasks) => {
  tasks.forEach((task) => {
    let domString = '';
    if (`${tasks.isCompleted}` === 'true') {
      domString = `<div> 
    <div class="img-holder">
        <img class="tasks-img" src="${task.img}"> 
    </div>
    <h3>${task.task}</h3>
    </div>`;
    }
    return domString;
  });
};

const getTasks = () => {
  dataGetter().then((allTasksArrary) => {
    console.log(allTasksArrary);
    $('tasks-card').html(creatCards(allTasksArrary.data));
    // .then((allTasksArrary) => {
    //     $('tasks-card').html(creatCards(allTasksArrary.data));
    //   });
  })
    .catch((error) => {
      console.error(error);
    });
};

export default getTasks;
