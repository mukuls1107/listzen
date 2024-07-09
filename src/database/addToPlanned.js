function Planned(){
    let taskList = [];
    let task = prompt("Enter the task here: ");
    taskList.push(task)
    localStorage.setItem("planned", taskList);
    const display = document.getElementsByClassName(".__plan-box");
    const data = localStorage.getItem("planned")
    // console.log(data)
    if(data.length < 0){
        console.log(`Data is empty.`)
    }else{
        console.log(`${data.toString()}`)
    }
}



export default Planned;