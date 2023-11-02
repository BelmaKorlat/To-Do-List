//Adding data in table
function addData() {
    let id = document.getElementById("todoId").value;
    let task = document.getElementById("todoTask").value;

    let tbody = document.getElementById("tableBody");
    let newRow = tbody.insertRow();

    newRow.insertCell(0).innerHTML = id;
    newRow.insertCell(1).innerHTML = task;
    newRow.insertCell(2).innerHTML = '<input type="checkbox" name="todo" id="taskCheckbox" onclick="updateStyle(this)">';
    newRow.insertCell(3).innerHTML =
        '<button onclick="edit(this)">EDIT</button>';
    newRow.insertCell(4).innerHTML = '<button onclick="deleteData(this)">DELETE</button>';

    clearInputs();
    saveData();
}

function clearInputs() {
    document.getElementById("todoId").value = "";
    document.getElementById("todoTask").value = "";
}

//Editing id and task
function edit(button) {

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

    saveData();
}

function deleteData(button) {

    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
    saveData();
}

function saveData() {
    localStorage.setItem("data", document.getElementById("tableBody").innerHTML);
}

function showTask() {
    document.getElementById("tableBody").innerHTML = localStorage.getItem("data");
}

showTask();

//Adding current date
function getDayAsString(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
}

// Create a new date instance
let currentDate = new Date();

// Get the day, month, and year
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Months are zero-indexed
let year = currentDate.getFullYear();
let dayString = getDayAsString(currentDate.getDay());

// Format the date
let formattedDate = addLeadingZero(day) + "." + addLeadingZero(month) + "." + year;

// Display the date
document.getElementById("date").innerHTML = dayString + " : " + formattedDate;

// Function to add a leading zero if the number is less than 10
function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
}

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
