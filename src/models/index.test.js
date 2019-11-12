const fs = require('fs')
var commands = []

it('should read the file and construct and array of command', () => {
    fs.readFile('./assets/sample.txt', 'utf-8', (err, data) => {
        commands = data.split('\n')
        expect(commands).toBeTruthy()
    });
})

