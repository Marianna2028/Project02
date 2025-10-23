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

    // -----------------------------
    // Task text with priority label
    // -----------------------------
    const span = document.createElement('span');
    // Correct syntax: backticks for template literal, and slice(1) not slice()1
   
span.innerHTML = `
  <span class="priority ${priority}">
    [${priority.charAt(0).toUpperCase() + priority.slice(1)}]
  </span> ${taskText}
`;
li.appendChild(span);


    // Default status
    span.classList.add('pending');

    // -----------------------------
    // Status radio buttons
    // -----------------------------
    const statusContainer = document.createElement('span');
    statusContainer.className = 'status-container';
    const uniqueName = 'status_' + Date.now();

    const pendingLabel = document.createElement('label');
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = uniqueName;
    pendingRadio.value = 'pending';
    pendingRadio.checked = true;
    pendingLabel.appendChild(pendingRadio);
    pendingLabel.appendChild(document.createTextNode(' Pending '));

    const completeLabel = document.createElement('label');
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = uniqueName;
    completeRadio.value = 'complete';
    completeLabel.appendChild(completeRadio);
    completeLabel.appendChild(document.createTextNode(' Complete '));

    statusContainer.appendChild(pendingLabel);
    statusContainer.appendChild(completeLabel);
    li.appendChild(statusContainer);

    // Update task style when status changes
    [pendingRadio, completeRadio].forEach(radio => {
      radio.addEventListener('change', function() {
        if (completeRadio.checked) {
          span.classList.add('completed');
          span.classList.remove('pending');
        } else {
          span.classList.remove('completed');
          span.classList.add('pending');
        }
      });
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = ' Remove ';
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


