import displayMainContent from "./display-board"
import loadCDN from "./loadCDN"
import addTask from "./add-task"
function wakeUp() {
    console.log("========= ListZen is Alive :) =============")
    loadCDN()
    document.body.appendChild(displayMainContent())
    // addTask.addTaskToImportant()
    // addTask.addTaskToPersonal()
    // addTask.addTaskToMyday()
    // addTask.addTaskToPlanned()

}

export default wakeUp