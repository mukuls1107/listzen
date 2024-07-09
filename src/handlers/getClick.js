function getClick() {
    const idList = [];
    for (let i = 0; i < 4; i++) {
        idList.push(`box-${i}`);
    }

    document.addEventListener("click", (e) => {
        if (idList.includes(e.target.id)) {
            console.log(`${e.target.id} was clicked!`);
        }
    });
}

export default getClick;
