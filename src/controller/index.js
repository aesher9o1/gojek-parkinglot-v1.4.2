import readline from 'readline'


class Controller {
    constructor() { }

    processInputData() {

    }

    processFile() {

    }

    takeInput() {
        let prompt = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false })
        prompt.question("Command:", (data) => this.processInputData(data))
    }
}

export default Controller
