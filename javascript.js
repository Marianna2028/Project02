document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#new-task").onsubmit = function (event) {
      
        event.preventDefault(); // stops the page from refreshing

        const li = document.createElement('li'); 
        let task_text = document.querySelector('#task').value.trim();
        if (task_text === "") return; // don’t add empty tasks

        let new_task_html = `
            <span>${task_text}</span>
            <button class="remove">Remove Task</button>
        `;
        li.innerHTML = new_task_html;

        // Remove task functionality
        li.querySelector('.remove').addEventListener('click', function() {
            li.remove();
        });

        document.querySelector("#tasks_list").appendChild(li);
        document.querySelector("#task").value = ''; // clear input
    }
});

