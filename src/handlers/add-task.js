import Planned from "../database/addToPlanned";
import Personal from "../database/addToPersonal";
import Important from "../database/addToImportant";
import Myday from "../database/addItemMyDay";

function addTaskToMyday() {
    const id = document.getElementById("box-0");
    id.addEventListener("click", (e) => {
        e.stopPropagation();
        // alert(`${id.id} was clicked!`);
        console.log(`Adding task in MY DAY!`)
        Myday()
    });
}

function addTaskToImportant() {
    const id = document.getElementById("box-1");
    id.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(`Adding task in IMPORTANT!`)
        Important()
    });
}

function addTaskToPlanned() {
    const id = document.getElementById("box-2");
    id.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(`Adding task in PLANNED!`)
        Planned()
    });
}

function addTaskToPersonal() {
    const id = document.getElementById("box-3");
    id.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(`Adding task in PERSONAL!`)
        Personal()
    });
}

export default { addTaskToImportant, addTaskToPersonal, addTaskToPlanned, addTaskToMyday };
