function addFlags() {
    const box1 = document.createElement("div")
    const box2 = document.createElement("div")
    const box3 = document.createElement("div")
    const box4 = document.createElement("div")

    // const icon = 

    const boxArr = [box1, box2, box3, box4];

    for (const box of boxArr) {
        box.setAttribute("class", "__flag-box")

    }



    // flag boxes
    const mainBox = document.createElement("div");
    mainBox.setAttribute("id", "__flag-main")
    mainBox.append(box1, box2, box3, box4)

    // terminal for box 1
    const terminal = document.createElement("i")
    const terminalTxt = document.createElement("span")
    terminalTxt.innerText = "My Day"
    terminal.setAttribute("class", "fa-solid fa-terminal")
    terminal.setAttribute("style", "color: #35868B")
    box1.append(terminal ,terminalTxt)

    // hourglass for box2
    const hourglass = document.createElement("i")
    const hgTxt = document.createElement("span")
    hgTxt.innerText = "Important"
    hourglass.className = "fa-solid fa-hourglass-start"
    hourglass.style.color = "#7C5213"
    box2.append(hourglass, hgTxt)

    // box for box3
    const cupboard = document.createElement("i")
    const cpTxt = document.createElement("span");
    cpTxt.innerText = "Planned"
    cupboard.setAttribute("class", "fa-solid fa-box")
    cupboard.setAttribute("style", "color: #798530")
    box3.append(cupboard, cpTxt);

    // Dummy
    const dummy = document.createElement("i")
    const dmTxt = document.createElement("span");
    dmTxt.innerText = "Personal"
    dummy.setAttribute("class", "fa-solid fa-user")
    dummy.setAttribute("style", "color: #000")
    box4.append(dummy,dmTxt)




    return mainBox

}

export default addFlags;