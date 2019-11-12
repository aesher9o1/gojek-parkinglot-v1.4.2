import readline from 'readline'
import { MODES } from '../../config'

class Controller {
    constructor() { }

    processInputData(data) {
        //if the input entered is a valid mode
        if (MODES[data.split(" ")[0]]) {
            console.log("valid mode")
        }
        else {
            console.log("invalid mode")
            this.takeInput()
        }
    }

    processFile() {

    }

    takeInput() {
        let prompt = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false })
        prompt.question("Command:", (data) => this.processInputData(data))
    }
}

export default Controller
