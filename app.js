
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit',() => {
     event.preventDefault();

     let newLi = document.createElement('li');
     let checkbox = document.createElement('input');
     checkbox.type = "checkbox";

     let deleteBtn = document.createElement("button");
     deleteBtn.textContent = "Delete";

     deleteBtn.addEventListener('click', function(event){
        toDoList.removeChild(this.parentElement);
  });

     newLi.textContent = title;
     newLi.appendChild(checkbox);
     newli.appendChild(deleteBtn);
     toDoList.appendChild(newLi);
     newToDoText.value = '';
   });
};

window.onload= function () {
  alert("The window has loaded!");
  onReady();
};
