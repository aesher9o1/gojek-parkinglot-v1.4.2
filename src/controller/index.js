import readline from 'readline'
import { MODES } from '../../config'
import ParkingLot from '../models'


class Controller {
    parkingDB;
    prompt;
    serverInstance;

    constructor(serverInstance) {
        this.parkingDB = new ParkingLot()
        this.serverInstance = serverInstance
    }

    takeInput() {
        this.prompt = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        })
        this.prompt.question("Command: ", (data) => this.processInputData(data))
    }

    processInputData(data) {
        //if the input entered is a valid mode
        const inputs = data.split(" ")
        if (MODES[inputs[0]]) {
            switch (inputs[0]) {
                case "create_parking_lot":
                    this.parkingDB.create_parking_lot(inputs[1])
                    break
                case "park":
                    break
                case "leave":
                    break
                case "status":
                    break
                case "registration_numbers_for_cars_with_colour":
                    break
                case "slot_numbers_for_cars_with_colour":
                    break
                case "slot_number_for_registration_number":
                    break
            }
            this.takeInput()
        }
        else {
            this.prompt.close()
            this.serverInstance.close()
        }
    }



    _processFile() {

    }


}

export default Controller
