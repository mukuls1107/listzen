import Planned from "../database/addToPlanned";
import Personal from "../database/addToPersonal";
import Important from "../database/addToImportant";
import Myday from "../database/addItemMyDay";

function addTaskToMyday() {
    const id = document.getElementById("box-0");
    if (id) {
        id.addEventListener("click", (e) => {
            e.stopPropagation();
            Myday();
        });
    } else {
        console.error("Element with ID 'box-0' not found.");
    }
}

function addTaskToImportant() {
    const id = document.getElementById("box-1");
    if (id) {
        id.addEventListener("click", (e) => {
            e.stopPropagation();
            Important();
        });
    } else {
        console.error("Element with ID 'box-1' not found.");
    }
}

function addTaskToPlanned() {
    const id = document.getElementById("box-2");
    if (id) {
        id.addEventListener("click", (e) => {
            e.stopPropagation();
            Planned();
        });
    } else {
        console.error("Element with ID 'box-2' not found.");
    }
}

function addTaskToPersonal() {
    const id = document.getElementById("box-3");
    if (id) {
        id.addEventListener("click", (e) => {
            e.stopPropagation();
            Personal();
        });
    } else {
        console.error("Element with ID 'box-3' not found.");
    }
}

export default { addTaskToImportant, addTaskToPersonal, addTaskToPlanned, addTaskToMyday };
