document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector("#new-task");
  const taskList = document.querySelector("#task-list");

  form.onsubmit = function(event) {
    event.preventDefault();

    const taskText = document.querySelector('#task').value.trim();
    const priority = document.querySelector('#priority').value;

    if (taskText === "") return;

    // Create task list item
    const li = document.createElement('li');

    // Create task span
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create radio buttons for Pending / Complete
    const statusContainer = document.createElement('span');
    const uniqueName = 'status_' + Date.now(); // unique name for radio buttons

    const pendingLabel = document.createElement('label');
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = uniqueName;
    pendingRadio.value = 'pending';
    pendingRadio.checked = true;
    pendingLabel.appendChild(pendingRadio);
    pendingLabel.appendChild(document.createTextNode('Pending'));

    const completeLabel = document.createElement('label');
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = uniqueName;
    completeRadio.value = 'complete';
    completeLabel.appendChild(completeRadio);
    completeLabel.appendChild(document.createTextNode('Complete'));

    statusContainer.appendChild(pendingLabel);
    statusContainer.appendChild(completeLabel);
    li.appendChild(statusContainer);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(removeBtn);

    // Append to task list
    taskList.appendChild(li);

    // Reset form
    form.reset();
  };
});


