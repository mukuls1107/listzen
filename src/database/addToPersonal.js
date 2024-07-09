function Personal(){
    let taskList = [];
    let task = prompt("Enter the task here: ");
    taskList.push(task)
    localStorage.setItem("personal", taskList);
    const display = document.getElementsByClassName(".__personal-box");
    const data = localStorage.getItem("personal")
    // console.log(data)
    if(data.length < 0){
        console.log(`Data is empty.`)
    }else{
        console.log(`${data.toString()}`)
    }
}



export default Personal;