class ParkingLot {
    constructor() {
        this._parkingDatabase = new Array()
    }

    create_parking_lot(size_parking_lot) {
        for (var i = 0; i < parseInt(size_parking_lot); i++)
            this._parkingDatabase.push(null)

        return size_parking_lot
    }

    park(registration_number, color) {
        let found;
        if (this._parkingDatabase.length > 0) {
            for (var i = 0; i < this._parkingDatabase.length; i++) {
                if (this._parkingDatabase[i] == null) {
                    this._parkingDatabase[i] = `${registration_number} ${color}`
                    found = true
                    return i + 1
                }
            }
            if (!found)
                return found
        } else {
            return found
        }
    }

    leave(index) {
        this._parkingDatabase[parseInt(index) - 1] = null
        return index
    }

    status() {
        var result = new Array()
        result.push("Slot No. Registration No. Color ")

        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i])
                result.push(`${i + 1} ${this._parkingDatabase[i]}`)
        }

        return result
    }

    registration_numbers_for_cars_with_colour(color) {
        let result = ""
        this._parkingDatabase.forEach(ele => {
            if (ele != null && ele.includes(color))
                result += `${ele.split(" ")[0]}, `
        })

        //removes last comma
        return result.substring(0, result.length - 2)
    }

    slot_numbers_for_cars_with_colour(color) {
        let result = ""
        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i] != null && this._parkingDatabase[i].includes(color))
                result += `${i + 1}, `
        }

        //removes last comma
        return result.substring(0, result.length - 2)
    }

    slot_number_for_registration_number(registration_number) {
        let found;
        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i] != null && this._parkingDatabase[i].includes(registration_number))
                found = `${i + 1}`
        }
        return found
    }
}

exports.default = ParkingLot