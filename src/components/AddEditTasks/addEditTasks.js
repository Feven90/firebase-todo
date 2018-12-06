import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import getData from '../../helpers/dataGetter';
import initializeTasksPage from '../tasksCard';

const formBuilder = (tasks) => {
  const form = `
      <div class="form-group">
        <label for="form-task-name">Task: </label>
        <input type="text" class="form-control" value="${tasks.task}" id="form-task" placeholder="walk the dog">
      </div>
    `;
  return form;
};

const gettingTaskFromForm = () => {
  const Task = {
    task: $('#form-task').val(),
    isCompleted: false,
    uid: authHelpers.getCurrentUid(),
  };
  return Task;
};
const buildAddForm = () => { // we need this function just to reuse fomBuilder func,adds add button
  const emptyTask = {
    task: '',
    isCompleted: '',
  };
  let domString = '<h2>Add new task</h2>';
  domString += formBuilder(emptyTask);
  domString += '<button id="add-task">Add Task</button>';
  $('#add-edit-task').html(domString).show();
  $('#tasks-collaction').show();
};
const addNewTask = () => {
  const newTask = gettingTaskFromForm();
  getData.addNewTask(newTask)
    .then(() => {
      $('#add-edit-task').html('').hide();
      $('#task-collaction').show();
      initializeTasksPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};
const showEditForm = (e) => {
  const idToEdit = e.target.dataset.editId;
  getData.getSingleTask(idToEdit)
    .then((singleTask) => {
      let domString = '<h2>Edit Friend</h2>';
      domString += formBuilder(singleTask);
      domString += `<button id="edit-task" data-single-edit-id=${singleTask.id}>Save Task</button>`;
      $('#add-edit-task').html(domString).show();
      $('#tasks-collaction').hide();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};
const updateTask = (e) => {
  const updatedTask = gettingTaskFromForm();
  const TaskId = e.target.dataset.singleEditId;
  getData.updateTask(updatedTask, TaskId)
    .then(() => {
      $('#add-edit-task').html('').hide();
      // $('#single-container').html('');
      $('#tasks-collaction').show();
      initializeTasksPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};
$('body').on('click', '#add-task', addNewTask);
$('body').on('click', '.edit-btn', showEditForm);
$('body').on('click', '#edit-task', updateTask);

export default buildAddForm;
