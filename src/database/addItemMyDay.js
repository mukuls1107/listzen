function Myday(){
    let taskList = [];
    let task = prompt("Enter the task here: ");
    taskList.push(task)
    localStorage.setItem("myday", taskList);

    const display = document.getElementsByClassName(".__myday-box");
    const data = localStorage.getItem("myday")
    // console.log(data)
    if(data.length < 0){
        console.log(`Data is empty.`)
    }else{
        
        console.log(`${data.toString()}`)
    }
}



export default Myday;