let cars = [];
let maxSize = 0;
let availableSlot = [];
const helper = require('./helper');

let create = async (noOfLot) => {
    try {
      maxSize = parseInt(noOfLot);
    } catch (e) {
      return 'Please enter valid number of Slot !';
    }
    for (let i = 1; i <= maxSize; i++) {
      availableSlot.push(i);
    }
    
    return 'Parking lot create with '+ availableSlot.length+' Slots';
  
}

let park = async (registratonNo, color) => {
    if (maxSize === 0) {
        return 'Parking lot has no Slots';
    } else if (maxSize === cars.length) {
        return 'Sorry, Parking lot is full';
    } else {
        rjNo = registratonNo.split("-");
        if(rjNo.length != 4){
            return 'Invalid Registraton Number, Please enter no in correct format(KA-01-HH-1234).';
        }
        var regularExp = /^(([a-zA-Z]{2}-\d{2}-[a-zA-Z]{2}-\d{4}))$/;
        if(!regularExp.test(registratonNo)){
            return 'Invalid Registraton Number, Please enter no in correct format(KA-01-HH-1234).';
        }
        
        slot = await helper.getSlot(rjNo[3], availableSlot );
        if(!slot){
            return 'No Slot found';
        }
        
        cars.push({
            'slot': slot,
            'registratonNo': registratonNo,
            'color': color
        });
    
        // console.log("pushed to car",Car);
        availableSlot = await helper.removeSlot(slot, availableSlot );
        return 'Slot Allocated - number: '+slot;
        
    }
}
  
  
let leave = async (slot) => {
    slot = parseInt(slot);
    if (maxSize === 0) {
        return 'Parking lot has no Slots';
    } else if (cars.length > 0) {
        if (await helper.searchElement(slot, 'slot', cars)) {
            cars = await helper.removeElement(slot, 'slot', cars);
    
            // Add a the number back into slot 
            availableSlot.push(slot);
            availableSlot.sort();
            return slot + ' Slot is free';
        } else {
            return 'Slot '+slot+' is already free.';
        }
    } else {
        return 'Parking lot is empty';
    }
}
  
  
let status = async () => {
    if (maxSize === 0) {
        return 'Parking lot has no Slots';
    } else if (cars.length > 0) {
        console.log("Slot No.\tRegistration No.\tColor");
        cars.forEach(function (row) {
            console.log(row.slot + "\t         " + row.registratonNo + "\t         " + row.color);
        });
    } else {
        return 'Parking lot is empty';
    }
}

module.exports = {
    create,
    park,
    leave,
    status
}