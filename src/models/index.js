class ParkingLot {
    _parkingDatabase = new Array()

    create_parking_lot(size_parking_lot) {
        for (var i = 0; i < parseInt(size_parking_lot); i++)
            this._parkingDatabase.push(null)

        console.log(`Created a parking lot with ${size_parking_lot} slots.`);
    }

    park() {

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
}

export default ParkingLot