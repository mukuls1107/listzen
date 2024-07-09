function Planned(){
    let taskList = [];
    let task = prompt("Enter the task here: ");
    taskList.push(task)
    localStorage.setItem("planned", taskList);
}



export default Planned;