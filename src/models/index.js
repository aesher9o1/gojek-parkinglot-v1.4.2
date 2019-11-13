class ParkingLot {
    constructor() {
        this._parkingDatabase = new Array()
    }

    /**
     * Creates an array of desired parking size and fills it will null 
     * denoting empty parking spaces
     * 
     * @param {string} size_parking_lot 
     * @returns {string} size of parking lot made
     */
    create_parking_lot(size_parking_lot) {
        for (var i = 0; i < parseInt(size_parking_lot); i++)
            this._parkingDatabase.push(null)

        return parseInt(size_parking_lot)
    }

    /**
     * Adds the registration number and color of the car at the nearest 
     * parking spot available in the array as a string for easy lookup
     * 
     * @param {string} registration_number 
     * @param {string} color 
     * @returns {number} if emplty space is found then returns the spot otherwise undefined
     */
    park(registration_number, color) {
        let found;
        if (this._parkingDatabase.length > 0) {
            for (var i = 0; i < this._parkingDatabase.length; i++) {
                if (this._parkingDatabase[i] == null) {
                    this._parkingDatabase[i] = `          ${registration_number}      ${color}`
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

    /**
     * Deletes the element from the particular position in the array
     * 
     * @param {String} index Parking spot to clear
     * @returns {string} Position of the parking lot cleared
     */
    leave(index) {
        this._parkingDatabase[parseInt(index) - 1] = null
        return parseInt(index)
    }

    /**
     * Prints the parking lot
     * @returns {object} Array of the parking lot made in the required format
     */
    status() {
        var result = new Array()
        result.push("Slot No.    Registration No    Colour")

        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i])
                result.push(`${i + 1} ${this._parkingDatabase[i]}`)
        }

        return result
    }

    /**
     * Lookups up for the color present in the string of parking lot array
     * 
     * @param {string} color 
     * @returns {string} All the car's registration number with the particular color
     */
    registration_numbers_for_cars_with_colour(color) {
        let result = ""
        this._parkingDatabase.forEach(ele => {
            if (ele != null && ele.includes(color))
                result += `${ele.trim().split("    ")[0]}, `
        })

        //removes last comma
        return result.substring(0, result.length - 2)
    }

    /**
      * Lookups up for the color present in the string of parking lot array
      * 
      * @param {string} color 
      * @returns {string} All the car's slot number with the particular color
      */
    slot_numbers_for_cars_with_colour(color) {
        let result = ""
        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i] != null && this._parkingDatabase[i].includes(color))
                result += `${i + 1}, `
        }

        //removes last comma
        return result.substring(0, result.length - 2)
    }

    /**
     * Finds the slot number of the car with particular color
     * @param {string} registration_number 
     * @returns {number} If found returns the position of where it was found otherwise return undefined
     */
    slot_number_for_registration_number(registration_number) {
        let found;
        for (var i = 0; i < this._parkingDatabase.length; i++) {
            if (this._parkingDatabase[i] != null && this._parkingDatabase[i].includes(registration_number))
                found = i + 1
        }
        return found
    }
}

exports.default = ParkingLot