function Personal(){
    let taskList = [];
    let task = prompt("Enter the task here (Cancel the task to view previous): ");
    if (task) {
        taskList.push(task);
        localStorage.setItem("personal", JSON.stringify(taskList));
    }

    const display = document.querySelector(".__personal-box");
    const data = localStorage.getItem("personal");

    if (data) {
        const tasks = JSON.parse(data);
        display.classList.add("task-box");

        // Clear previous tasks
        display.innerHTML = '';

        // Add tasks to the display
        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.textContent = task;
            display.appendChild(taskElement);
        });

        console.log(`${tasks.toString()}`);
    } else {
        console.log("Data is empty.");
    }
}



export default Personal;