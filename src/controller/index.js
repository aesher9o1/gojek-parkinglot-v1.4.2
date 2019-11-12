const readline = require('readline')
const parkingLot = require('../models').default
const fs = require('fs')
const config = require('../../config')


class Controller {
    constructor(serverInstance) {
        this.parkingDB = new parkingLot()
        this.serverInstance = serverInstance
    }

    takeInput() {
        this.prompt = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        })
        this.prompt.question("", (data) => this.processInputData(data))
    }

    processInputData(data) {
        //if the input entered is a valid mode
        const inputs = data.split(" ")
        if (config.MODES[inputs[0]]) {
            switch (inputs[0]) {
                case "create_parking_lot":
                    let statusParkingCreated = this.parkingDB.create_parking_lot(inputs[1])
                    console.log(`Created a parking lot with ${statusParkingCreated} slots.`);
                    break
                case "park":
                    let seatAlloted = this.parkingDB.park(inputs[1], inputs[2])
                    console.log(seatAlloted ? `Allocated slot number: ${seatAlloted}` : "Sorry, parking lot is full")
                    break
                case "leave":
                    let freeSlot = this.parkingDB.leave(inputs[1])
                    console.log(`Slot number ${freeSlot} is free`)
                    break
                case "status":
                    let result = this.parkingDB.status()
                    result.forEach(ele => {
                        console.log(ele)
                    })
                    break
                case "registration_numbers_for_cars_with_colour":
                    let registrationNumbers = this.parkingDB.registration_numbers_for_cars_with_colour(inputs[1])
                    console.log(registrationNumbers)
                    break
                case "slot_numbers_for_cars_with_colour":
                    let slots = this.parkingDB.slot_numbers_for_cars_with_colour(inputs[1])
                    console.log(slots)
                    break
                case "slot_number_for_registration_number":
                    let slot = this.parkingDB.slot_number_for_registration_number(inputs[1])
                    console.log(slot ? slot : "Not Found")
                    break
            }
            this.takeInput()
        }
        else {
            this.prompt.close()
            this.serverInstance.close()
        }
    }



    processFile(args) {
        fs.readFile(args.toString(), 'utf-8', (err, data) =>
            data.split('\n').forEach(ele => this.processInputData(ele))
        );
    }


}


exports.default = Controller
