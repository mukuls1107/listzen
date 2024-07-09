function addFlags() {
    const box1 = document.createElement("div")
    const box2 = document.createElement("div")
    const box3 = document.createElement("div")
    const box4 = document.createElement("div")

    // const icon = 

    const boxArr = [box1, box2, box3, box4];
    let i = 0;
    for (i; i < boxArr.length; i++) {
        
        boxArr[i].setAttribute("class", "__flag-box")
        boxArr[i].setAttribute("id", `box-${i}`)
    }



    // flag boxes
    const mainBox = document.createElement("div");
    mainBox.setAttribute("id", "__flag-main")
    mainBox.append(box1, box2, box3, box4)

    // terminal for box 1
    const tBox = document.createElement("div")
    tBox.setAttribute("class", "tBox")
    const terminal = document.createElement("i")
    const terminalTxt = document.createElement("span")
    terminalTxt.innerText = "My Day"

    terminal.setAttribute("class", "fa-solid fa-terminal")
    terminal.setAttribute("style", "color: #35868B")
    tBox.append(terminal, terminalTxt)
    box1.append(tBox)
    // box1.append(terminal ,terminalTxt)

    // hourglass for box2
    const hBox = document.createElement("div")
    hBox.setAttribute("class", "tBox")
    const hourglass = document.createElement("i")
    const hgTxt = document.createElement("span")
    hgTxt.innerText = "Important"
    hourglass.className = "fa-solid fa-hourglass-start"
    hourglass.style.color = "#7C5213"
    hBox.append(hourglass, hgTxt)
    box2.append(hBox)
    // box2.append(hourglass, hgTxt)

    // box for box3
    const cBox = document.createElement("div")
    cBox.setAttribute("class", "tBox")
    const cupboard = document.createElement("i")
    const cpTxt = document.createElement("span");
    cpTxt.innerText = "Planned"
    cupboard.setAttribute("class", "fa-solid fa-box")
    cupboard.setAttribute("style", "color: #798530")
    cBox.append(cupboard, cpTxt);
    box3.append(cBox)

    // Dummy
    const dBox = document.createElement("div")
    dBox.setAttribute("class", "tBox")
    const dummy = document.createElement("i")
    const dmTxt = document.createElement("span");
    dmTxt.innerText = "Personal"
    dummy.setAttribute("class", "fa-solid fa-user")
    dummy.setAttribute("style", "color: #000")
    dBox.append(dummy, dmTxt)
    box4.append(dBox)




    return mainBox

}

export default addFlags;