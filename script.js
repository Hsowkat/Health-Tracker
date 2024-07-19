// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks
// TODO: Call the render function to update the table with the new tasks.

// script.js
// Section 2: App State Variables
let tasks = [];

// script.js
// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable").getElementsByTagName('tbody')[0];

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }

    // Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });

    // Call the render function
    render();
}

// Function to render tasks in the table
function render() {
    // Clear the table
    taskTable.innerHTML = '';

    // Use array methods to create a new table row of data for each item in the array
    tasks.forEach((task, index) => {
        const row = taskTable.insertRow();

        const nameCell = row.insertCell(0);
        const descCell = row.insertCell(1);
        const deadlineCell = row.insertCell(2);
        const actionsCell = row.insertCell(3);

        nameCell.textContent = task.name;
        descCell.textContent = task.description;
        deadlineCell.textContent = task.deadline;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => markTaskComplete(index);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index);

        actionsCell.appendChild(completeButton);
              actionsCell.appendChild(removeButton);
          });
      }

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();


// Function to mark a task as complete
function markTaskComplete(index) {
    tasks.splice(index, 1); // Remove the task from the array
    render(); // Re-render the table
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    render(); // Re-render the table
}

      

