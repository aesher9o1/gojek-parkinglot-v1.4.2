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
                    this._parkingDatabase[i] = `${registration_number} ${color}`
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

    leave(index) {
        this._parkingDatabase[parseInt(index) - 1] = null
        console.log(`Slot number ${index} is free`)
    }

    status() {
        var result = new Array()
        result.push("Slot No. Registration No. Color ")

        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i])
                result.push(`${i+1} ${this._parkingDatabase[i]}`)

        }

        for (var i = 0; i < result.length; i++)
            console.log(result[i])
    }

    registration_numbers_for_cars_with_colour() {

    }

    slot_numbers_for_cars_with_colour() {

    }

    slot_number_for_registration_number() {

    }
}

export default ParkingLot