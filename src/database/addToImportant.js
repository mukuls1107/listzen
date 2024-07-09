function Important(){
    let taskList = [];
    let task = prompt("Enter the task here: ");
    taskList.push(task)
    localStorage.setItem("important", taskList);

    const display = document.getElementsByClassName(".__imp-box");
    const data = localStorage.getItem("important")
    // console.log(data)
    if(data.length < 0){
        console.log(`Data is empty.`)
    }else{
        console.log(`${data.toString()}`)
    }
}



export default Important;