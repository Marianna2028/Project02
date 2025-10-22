document.addEventListener('DOMContentLoaded', function() {

  // Handle form submission
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault();

    const task_text = document.querySelector('#task').value.trim();
    if (task_text === "") return;

    // Create new list item
    const li = document.createElement('li');

    // --- Task text ---
    const span = document.createElement('span');
    span.textContent = task_text;
    li.appendChild(span);

    // --- Priority dropdown (if in HTML) ---
    const prioritySelect = document.createElement('select');
    prioritySelect.innerHTML = `
      <option value="">Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `;
    li.appendChild(prioritySelect);

    // --- Complete button ---
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', function() {
      span.classList.add('completed');
      span.classList.remove('pending');
    });
    li.appendChild(completeBtn);

    // --- Pending button ---
    const pendingBtn = document.createElement('button');
    pendingBtn.textContent = "Pending";
    pendingBtn.addEventListener('click', function() {
      span.classList.add('pending');
      span.classList.remove('completed');
    });
    li.appendChild(pendingBtn);

    // --- Remove button ---
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(removeBtn);

    // --- Add the list item to the task list ---
    document.querySelector("#tasks_list").appendChild(li);

    // Clear input
    document.querySelector('#task').value = "";
  };
});

