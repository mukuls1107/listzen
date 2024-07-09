import displayMainContent from "./display-board"
import loadCDN from "./loadCDN"

function wakeUp() {
    console.log("========= ListZen is Alive :) =============")
    loadCDN()
    document.body.appendChild(displayMainContent())
 

}

export default wakeUp