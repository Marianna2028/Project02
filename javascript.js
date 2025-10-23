// adding new task to list
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#new-task");
  const taskList = document.querySelector("#task-list");
  
      //array 
   
    tasks = [];
    

  //submittion of task
  form.onsubmit = function(event) {
    event.preventDefault();



    //task priority 
    const taskText = document.querySelector('#task').value.trim();
    const priority = document.querySelector('#priority').value;

    //cannot submit an empty task
    if (taskText === "") return;

    //creating values 

    
    let task = {
"task-id" : id,
"task-name" : task_name,
"task-priority" : priority,
"status" : task_status,
}


    // Create task list item
    const li = document.createElement('li');

    
    // Task text with priority label
    const span = document.createElement('span');
   
//prints it all together 
span.innerHTML = `
  <span class="priority ${priority}">
    [${priority.charAt(0).toUpperCase() + priority.slice(1)}]
  </span> ${taskText}
`;
li.appendChild(span);


    // Default status
    span.classList.add('pending');

   
    // Status radio buttons

    //accessing the task status 
    const statusContainer = document.createElement('span');
    statusContainer.className = 'status-container';
    const uniqueName = 'status_' + Date.now();

    //pending and completed buttons: only one of them can be selected at once 

    //pending option (default)
    const pendingLabel = document.createElement('label');
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio'; 
    pendingRadio.name = uniqueName; //will be grouped with complete button
    pendingRadio.value = 'pending';
    pendingRadio.checked = true; //task will be set to pending by default 
    pendingLabel.appendChild(pendingRadio);
    pendingLabel.appendChild(document.createTextNode(' Pending '));


    //complete option
    const completeLabel = document.createElement('label');
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = uniqueName; //grouped with pending button
    completeRadio.value = 'complete';
    completeLabel.appendChild(completeRadio);
    completeLabel.appendChild(document.createTextNode(' Complete '));

    //adds entire status to list item 
    statusContainer.appendChild(pendingLabel);
    statusContainer.appendChild(completeLabel);
    statusContainer.id = tasks.length + 1
    li.appendChild(statusContainer);

    
      ${index + 1}. ${item.title} (${item.priority}, ${item.status})

    // Update task style when status changes
    [pendingRadio, completeRadio].forEach(radio => {
      radio.addEventListener('change', function() {
      //when user selects either option
        if (completeRadio.checked) { 
          span.classList.add('completed');
          span.classList.remove('pending'); //task will no longer be pending (orange) but marked as competed (green with a line through it) 
          alert("Congratulations on completing your task!🎉🎉🎉"); //alert when user marks task as completed

          //updates task in array
          task.status = "completed";

          
          
        } else { //until user marks task as completed it will remain pending
          span.classList.remove('completed');
          span.classList.add('pending');
        }
      });
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = ' Remove ';
    removeBtn.addEventListener('click', function() {
      li.remove(); //task will  only be removed when user selects that option
      alert("Your task has been removed."); //alert when user removes a task

      // updates task in array
      task.status = "removed";
      
      
    });
    li.appendChild(removeBtn); //button to preform action 

    // Append to task list -> visable to the user 
    taskList.appendChild(li);

    // Reset form --> will clear inputs in the field 
    form.reset();
  };
});


