function createSearchBar(){
    
    
    const box = document.createElement("input");
    box.setAttribute("class", "__search-box")

    box.setAttribute("type", "search")
    box.setAttribute("placeholder", "Search...")


    return box
}

export default createSearchBar;