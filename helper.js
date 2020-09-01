let getSlot = async (regNo, availableSlot) => {
    var found = availableSlot.find(function (element) { 
        if(regNo%2 == 0 && element%2 == 0){
            return element; 
        }
        if(regNo%2 != 0 && element%2 != 0){
            return element; 
        }
    }); 
    return found;
}

let removeSlot = async (slot, availableSlot) => {
    availableSlot = availableSlot.filter(function(value, index, arr){ return value != slot;})
    return availableSlot;
}

let searchElement = async (slot, prop, carArray) => {
    for (var i = 0; i < carArray.length; i++) {
        if (carArray[i][prop] === slot) {
            return carArray[i];
        }
    }
    return false;
}
  
let removeElement = async (slot, prop, carArray) => {
    var i = carArray.length;
    while (i--) {
        if (carArray[i]
            && carArray[i].hasOwnProperty(prop)
            && (arguments.length > 2 && carArray[i][prop] === slot)) {
            carArray.splice(i, 1);
        }
    }
    return carArray;
}

module.exports = {
    getSlot,
    removeSlot,
    searchElement,
    removeElement
}
  
  
