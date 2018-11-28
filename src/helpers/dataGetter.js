import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getAllTasksFromDb = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tasks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allTasksObject = result.data;
      const allTasksArray = [];
      if (allTasksObject != null) {
        Object.keys(allTasksObject).forEach((taskId) => {
          const newTask = allTasksObject[taskId];
          console.log(newTask);
          newTask.id = taskId;
          allTasksArray.push(newTask);
        });
      }
      console.log(allTasksArray);
      resolve(allTasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const addNewTasks = TasksObject => axios.post(`${baseUrl}/tasks.json`, JSON.stringify(TasksObject));

export default { getAllTasksFromDb, addNewTasks };
