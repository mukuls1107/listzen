import createSearchBar from "./searchBar";
import addFlags from "./addFlags";


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




    mainBox.appendChild(leftBox);
    mainBox.appendChild(rightBox);

    return mainBox;

}

export default displayMainContent;
