document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#new-task").onsubmit = function () {
      
      cost li = document.createElement('li');
      li.innerHTML = document.querySelector('#task').value 
      document.querySelector("#tasks_list").appendli;
      document.querySelector("#task").value = '';

        return false;
    }
  
});


