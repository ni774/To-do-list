let addTodoButton = document.getElementById('add_Todobtn');
let inputField = document.getElementById('inputfield');
let todocontainer = document.getElementById('todo_container');

addTodoButton.addEventListener('click',function() {             //when button clicked function will be fired

let paragraph= document.createElement('P');
paragraph.innerText=inputField.value;
todocontainer.appendChild(paragraph);
paragraph.className = 'paragraph-styling';          
inputField.value="";
paragraph.addEventListener('click',()=>{                       // if task done
    paragraph.setAttribute("style","text-decoration-line:line-through; text-decoration-color:red;");

})
paragraph.addEventListener('dblclick',()=>{                   // for delete task
    todocontainer.removeChild(paragraph);
})

let br =document.createElement('br');
todocontainer.appendChild(br);

})
