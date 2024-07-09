import storageAvailable from "./availability";
import getClick from "../handlers/getClick";
function addNote(){
    if(storageAvailable("localStorage")){
        getClick()
    }else{
        console.log("Sorry! The Database failed to get the data...")
    }

}

export default addNote;