import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getAllTasksFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/todo.json`)
    .then((result) => {
      const allTasksObject = result.data;
      const allTasksArray = [];
      if (allTasksObject != null) {
        Object.keys(allTasksObject).forEach((taskId) => {
          const newTask = allTasksObject[taskId];
          newTask.id = taskId;
          allTasksArray.push(newTask);
        });
      }
      console.log(allTasksArray[0]);
      resolve(allTasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getAllTasksFromDb;
