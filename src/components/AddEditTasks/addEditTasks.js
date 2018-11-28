import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import dataGetter from '../../helpers/dataGetter';
import initializeTasksPage from '../tasksCard';

const formBuilder = (tasks) => {
    const form = `
      <div class="form-group">
        <label for="form-friend-name">Name: </label>
        <input type="text" class="form-control" value="${tasks.task}" id="form-task" placeholder="walk the dog">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="form-friend-address">Is completed? </label>
        <input type="text" class="form-control" value="${tasks.isCompleted}" id="form-tasks-complete" placeholder="true">
      </div>
    `;
    return form;
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
    $('#tasks-collaction').hide();
  };
  $('body').on('click', '#add-friend', addNewFriend);

  export default buildAddForm;
