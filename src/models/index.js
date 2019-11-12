class ParkingLot {
    _parkingDatabase = new Array()

    create_parking_lot(size_parking_lot) {
        for (var i = 0; i < parseInt(size_parking_lot); i++)
            this._parkingDatabase.push(null)

        console.log(`Created a parking lot with ${size_parking_lot} slots.`);
    }

    park(registration_number, color) {
        let found = false;
        if (this._parkingDatabase.length > 0) {
            for (var i = 0; i < this._parkingDatabase.length; i++) {
                if (this._parkingDatabase[i] == null) {
                    this._parkingDatabase[i] = this._makeParkingObj(registration_number, color)
                    console.log(`Allocated slot number: ${i + 1}`)
                    found = true
                    break
                }
            }
            if (!found)
                console.log("Sorry, parking lot is full")
        } else {
            console.log("Sorry, parking lot is full")
        }
    }

    leave() {

    }

    status() {

    }

    registration_numbers_for_cars_with_colour() {

    }

    slot_numbers_for_cars_with_colour() {

    }

    slot_number_for_registration_number() {

    }

    _makeParkingObj(registration_number, color) {
        let obj = new Object();
        obj.registration_number = "REGISTRATION NUMBER OF CAR"
        obj.color = "COLOR OF THE CAR"
        return obj
    }

}

export default ParkingLot