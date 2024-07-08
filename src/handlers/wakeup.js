import displayMainContent from "./display-board"

function wakeUp() {
    console.log("========= ListZen is Alive :) =============")
    document.body.appendChild(displayMainContent())
}

export default wakeUp