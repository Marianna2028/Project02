document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#new-task");
    const taskInput = document.querySelector("#task");
    const tasksList = document.querySelector("#tasks_list");

    form.onsubmit = function(event) {
        event.preventDefault(); // prevent page refresh
        const taskText = taskInput.value.trim();
        if (!taskText) return; // don’t add empty tasks

        // Create list item
        const li = document.createElement('li');

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.style.marginRight = "10px";

        // Priority dropdown
        const prioritySelect = document.createElement('select');
        prioritySelect.innerHTML = `
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        `;
        prioritySelect.style.marginRight = "10px";

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove Task";
        removeButton.addEventListener('click', () => li.remove());

        // Add elements to li
        li.appendChild(taskSpan);
        li.appendChild(prioritySelect);
        li.appendChild(removeButton);

        // Add li to the list
        tasksList.appendChild(li);

        // Clear input
        taskInput.value = '';
    };
});

