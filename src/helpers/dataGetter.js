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
          newTask.id = taskId;
          allTasksArray.push(newTask);
        });
      }
      resolve(allTasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleTask = TaskId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tasks/${TaskId}.json`)
    .then((result) => {
      const singleTask = result.data;
      singleTask.id = TaskId;
      resolve(singleTask);
    })
    .catch((error) => {
      reject(error);
    });
});

const addNewTask = TasksObject => axios.post(`${baseUrl}/tasks.json`, JSON.stringify(TasksObject));

const updateTask = (tasksObject, taskId) => axios.put(`${baseUrl}/tasks/${taskId}.json`, JSON.stringify(tasksObject));

const deleteTask = taskId => axios.delete(`${baseUrl}/tasks/${taskId}.json`);

const updateIsCompleted = (taskId, isCompleted) => axios.patch(`${baseUrl}/tasks/${taskId}.json`, { isCompleted });


export default {
  getAllTasksFromDb,
  addNewTask,
  updateTask,
  getSingleTask,
  deleteTask,
  updateIsCompleted,
};
