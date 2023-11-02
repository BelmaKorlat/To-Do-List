function addDataWork() {
    let id = document.getElementById("todoIdWork").value;
    let task = document.getElementById("todoTaskWork").value;

    let tbody = document.getElementById("tableBodyWork");
    let newRow = tbody.insertRow();

    newRow.insertCell(0).innerHTML = id;
    newRow.insertCell(1).innerHTML = task;
    newRow.insertCell(2).innerHTML = '<input type="checkbox" name="todo" id="taskCheckbox" onclick="updateStyle(this)">';
    newRow.insertCell(3).innerHTML = '<button onclick="editWork(this)">EDIT</button>';
    newRow.insertCell(4).innerHTML = '<button onclick="deleteDataWork(this)">DELETE</button>';

    clearInputsWork();
    saveDataWork();
}

function clearInputsWork() {
    document.getElementById("todoIdWork").value = "";
    document.getElementById("todoTaskWork").value = "";
}

//Editing id and task
function editWork(button) {

    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode;

    // Get the cells within the row 
    let idCell = row.cells[0];
    let taskCell = row.cells[1];

    // Prompt the user to enter updated values 
    let idInput =
        prompt("Enter the updated id:",
            idCell.innerHTML);
    let taskInput =
        prompt("Enter the updated task:",
            taskCell.innerHTML);

    // Update the cell contents with the new values 
    idCell.innerHTML = idInput;
    taskCell.innerHTML = taskInput;

    saveDataWork();
}

function deleteDataWork(button) {

    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
    saveDataWork();
}

function saveDataWork() {
    localStorage.setItem("dataWork", document.getElementById("tableBodyWork").innerHTML);
}

function showTaskWork() {
    document.getElementById("tableBodyWork").innerHTML = localStorage.getItem("dataWork");
}

showTaskWork();

//Line through
function updateStyle(checkbox) {
    let row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
        row.style.textDecoration = "line-through";
        row.style.color = "black";
    } else {
        row.style.textDecoration = "none";
        row.style.color = "white";
    }
}