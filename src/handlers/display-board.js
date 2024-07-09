import createSearchBar from "./searchBar";
import addFlags from "./addFlags";
import addTask from "./add-task";


function displayMainContent() {
    const mainBox = document.createElement("div");
    mainBox.setAttribute("id", "main");
    mainBox.classList.add("centered");

    const leftBox = document.createElement("aside");
    leftBox.setAttribute("id", "left");

    const rightBox = document.createElement("aside");
    rightBox.setAttribute("id", "right");

    // Creating Heading
    const titleBox = document.createElement("div")
    titleBox.setAttribute("class", "__box")

    const title = document.createElement("span")
    title.setAttribute("class", "__title")
    title.innerText = "List Zen"

    titleBox.append(title)
    createSearchBar()
    leftBox.append(titleBox, createSearchBar(), addFlags())

    // Left Box is finished


    /**
     * Starting Right Box now.
     */


    const mdTask = document.createElement("div")
    const impTask = document.createElement("div")
    const plTask = document.createElement("div")
    const psTask = document.createElement("div")
    const taskBox = document.createElement("div")
    taskBox.setAttribute("class", "task-container")

    mdTask.setAttribute("class", "__myday-box")
    impTask.setAttribute("class", "__imp-box")
    plTask.setAttribute("class", "__plan-box")
    psTask.setAttribute("class", "__personal-box")


    taskBox.append(mdTask, impTask, plTask, psTask)
    rightBox.append(taskBox)





    /**
     * Don't touch below 
     */

    mainBox.appendChild(leftBox);
    mainBox.appendChild(rightBox);
    setTimeout(() => {

        addTask.addTaskToMyday();
        addTask.addTaskToImportant();
        addTask.addTaskToPlanned();
        addTask.addTaskToPersonal();



    }, 1000)

    return mainBox;

}

export default displayMainContent;
